import { FindAllAvailableSensorsSuccessfulResponseDto } from './dto/find-all-available-sensors-success.dto';
import { HttpStatus, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SensorEntity } from './entities/sensor.entity';
import { sensors } from './seeds/available-sensors';
import { PopulateSuccessfulResponseDto } from './dto/populate-successful-response.dto';
import { AvailableSensorsEntity } from './entities/available-sensors.entity';
import { LinkSensorDto } from './dto/link-sensor.dto';
import { LocationEntity } from 'src/locations/entities/location.entity';
import { MeasurementEntity } from './entities/measurement.entity';
// import { resolve } from 'path';
import { UnlinkSensorDTO } from './dto/unlink-sensor.dto';
import { GetSensorsSuccess } from './dto/get-sensors-success';
import { OverviewSuccess } from './dto/overview-success.dto';

@Injectable()
export class SensorsService implements OnModuleInit {
  constructor(
    @Inject('SENSORS_REPOSITORY')
    private readonly sensorsRepository: Repository<SensorEntity>,
    @Inject('MEASUREMENTS_REPOSITORY')
    private readonly measurementsRepository: Repository<MeasurementEntity>,
    @Inject('AVAILABLE_SENSORS_REPOSITORY')
    private readonly availableSensorsRepository: Repository<AvailableSensorsEntity>,
    @Inject('LOCATIONS_REPOSITORY')
    private readonly locationsRepository: Repository<LocationEntity>,
  ) {}

  populate(): Promise<PopulateSuccessfulResponseDto> {
    return new Promise(async (resolve, reject) => {
      try {
        const dbDevices = await this.availableSensorsRepository.find();

        if (dbDevices.length === sensors.length) {
          resolve({
            message: 'Sensores padrão já estão no banco de dados',
            statusCode: HttpStatus.OK,
          });
          return;
        }

        const createdSensors = this.availableSensorsRepository.create(sensors);
        await this.availableSensorsRepository.save(createdSensors);

        resolve({
          message: 'Sensores padrão adicionados ao banco de dados com sucesso',
          statusCode: HttpStatus.CREATED,
        });
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  async onModuleInit() {
    await this.populate();
  }

  findAllAvailableSensors(): Promise<
    FindAllAvailableSensorsSuccessfulResponseDto[]
  > {
    return new Promise(async (resolve, reject) => {
      try {
        const availableSensors = await this.availableSensorsRepository.find({
          select: { available_sensor_id: true, name: true },
        });

        resolve(availableSensors);
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  linkSensor(
    location_id: number,
    sensor: LinkSensorDto,
    companyId: number,
  ): Promise<SensorEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const location = await this.locationsRepository.findOne({
          where: {
            location_id: location_id,
            company: {
              company_id: companyId,
            },
          },
        });

        if (!location) {
          reject('Local não encontrado');
          return;
        }

        const {
          active,
          availableSensorId,
          macAddress,
          name: linkedSensorName,
        } = sensor;

        const availableSensor = await this.availableSensorsRepository.findOne({
          where: { available_sensor_id: availableSensorId },
        });

        if (!availableSensor) {
          reject('Sensor não encontrado');
          return;
        }

        const newSensor = this.sensorsRepository.create({
          active,
          availableSensor,
          location,
          name: linkedSensorName,
          macAddress,
        });
        const savedSensor = await this.sensorsRepository.save(newSensor);
        resolve(savedSensor);
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  registerMeasurement(
    sensor_id: number,
    measurement: number,
    companyId: number,
  ): Promise<MeasurementEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const linkedSensor = await this.sensorsRepository.findOne({
          where: {
            sensor_id: sensor_id,
            location: {
              company: {
                company_id: companyId,
              },
            },
          },
        });

        if (!linkedSensor) {
          reject('Sensor vinculado não encontrado');
          return;
        }

        const newMeasurement = this.measurementsRepository.create({
          measurement,
          sensors: linkedSensor,
        });
        const savedMeasurement =
          this.measurementsRepository.save(newMeasurement);

        resolve(savedMeasurement);
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  async getSensors(
    id: number,
    companyId: number,
  ): Promise<GetSensorsSuccess[]> {
    return new Promise(async (resolve, reject) => {
      const locations = await this.locationsRepository.findOne({
        where: {
          location_id: id,
          company: {
            company_id: companyId,
          },
        },
      });

      if (locations === null) {
        reject({ message: 'Local não encontrado' });
      }
      const sensors = await this.sensorsRepository.find({
        where: {
          location: {
            location_id: id,
          },
        },
        relations: { availableSensor: true },
        select: { availableSensor: { available_sensor_id: true } },
      });
      const results = sensors.map((sensor) => {
        const data = {
          ...sensor,
          available_sensor_id: sensor.availableSensor.available_sensor_id,
        };
        delete data.availableSensor;
        return data;
      });
      resolve(results);
    });
  }

  async overview(
    companyId: number,
    locationId: number,
  ): Promise<OverviewSuccess[] | string> {
    return new Promise(async (resolve, reject) => {
      try {
        const locations = await this.locationsRepository.findOne({
          where: {
            location_id: locationId,
            company: {
              company_id: companyId,
            },
          },
        });
        if (locations === null) {
          resolve(undefined);
        }
        const sensors = await this.sensorsRepository.find({
          where: {
            location: {
              location_id: locationId,
            },
          },
          relations: ['measurements', 'availableSensor'],
        });

        if (sensors.length === 0) {
          resolve('Não há sensores vinculados a este local');
        }

        const sensorsWithMeasurements = sensors.map((sensor, i) => {
          const { measurements, availableSensor, name } = sensor;
          const { name: sensorName } = availableSensor;
          const measurementList = measurements.map((measurement) => {
            return measurement.measurement;
          });

          return {
            name,
            sensorName,
            measurementList,
          };
        });
        resolve(sensorsWithMeasurements);
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  async unlinkSensor(unlikSensor: UnlinkSensorDTO, companyId: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location_id, sensor_id } = unlikSensor;
        const sensor = await this.sensorsRepository.findOne({
          where: {
            sensor_id: sensor_id,
            location: {
              location_id: location_id,
              company: {
                company_id: companyId,
              },
            },
          },
        });

        if (!sensor) {
          reject({ message: `Sensor e local recebidos não estão vinculados` });
        }
        await this.sensorsRepository.delete({ sensor_id: sensor_id });
        resolve('sucesso');
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  editLinkedSensor({ sensor, sensor_id, userId }): Promise<SensorEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const sensorToUpdate = await this.sensorsRepository.findOne({
          where: {
            sensor_id: sensor_id,
            location: { company: { company_id: userId } },
          },
        });

        const availableSensor = await this.availableSensorsRepository.findOne({
          where: { available_sensor_id: sensor.availableSensorId },
        });

        if (!sensorToUpdate) {
          reject(
            `Este usuário não possui um sensor com o id ${sensor_id} vinculado`,
          );
          return;
        }

        const updatedSensor = { ...sensorToUpdate, ...sensor, availableSensor };

        resolve(await this.sensorsRepository.save(updatedSensor));
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }
}
