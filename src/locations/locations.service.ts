import { BadRequestException, Injectable, Inject } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { LocationEntity } from './entities/location.entity';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import { HttpStatus } from '@nestjs/common';
import { SensorEntity } from 'src/sensors/entities/sensor.entity';
import { AvailableSensorsEntity } from 'src/sensors/entities/available-sensors.entity';
import { LinkSensorDto } from 'src/sensors/dto/link-sensor.dto';
import { getLocationDto } from './dto/get-location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @Inject('LOCATIONS_REPOSITORY')
    private readonly locationRepository: Repository<LocationEntity>,
    @Inject('COMPANIES_REPOSITORY')
    private readonly companyRepository: Repository<CompanyEntity>,
    @Inject('SENSORS_REPOSITORY')
    private readonly sensorsRepository: Repository<SensorEntity>,
    @Inject('AVAILABLE_SENSORS_REPOSITORY')
    private readonly linkedSensor: Repository<LinkSensorDto>,
  ) {}
  async create(
    id: any,
    createLocationDto: CreateLocationDto,
  ): Promise<LocationEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { fieldName } = createLocationDto;

        // Verifica se já existe um registro com o mesmo fieldName
        const existingLocation = await this.locationRepository.findOne({
          where: { fieldName },
        });
        if (existingLocation) {
          reject('Já existe um registro com esse nome');
        }

        if (!existingLocation) {
          const location = this.locationRepository.create(createLocationDto);
          location.company = id;
          const savedLocation = await this.locationRepository.save(location);
          resolve(savedLocation);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async delete(companyId: any, locationId: any) {
    return new Promise(async (resolve, reject) => {
      try {
        // Verifica se já existe um registro com o mesmo id
        const existingLocation = await this.locationRepository.findOne({
          where: {
            location_id: locationId,
            company: {
              company_id: companyId,
            },
          },
        });
        if (!existingLocation) {
          reject({
            message: 'Local não encontrado',
            errorCode: HttpStatus.NOT_FOUND,
          });
        }

        if (existingLocation) {
          const deletedLocation = await this.locationRepository.delete({
            location_id: locationId,
          });
          resolve(deletedLocation);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async update(
    companyId: any,
    locationId: any,
    updateLocationDto: UpdateLocationDto,
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const existingLocation = await this.locationRepository.findOne({
          where: {
            location_id: locationId,
            company: {
              company_id: companyId,
            },
          },
        });
        if (!existingLocation) {
          reject({
            message: 'Local não encontrado',
            errorCode: HttpStatus.NOT_FOUND,
          });
        }

        if (existingLocation) {
          const updatedLocation = Object.assign(
            existingLocation,
            updateLocationDto,
          );
          await this.locationRepository.save(updatedLocation);
          resolve(updatedLocation);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async findAllWithSensors(id: any): Promise<getLocationDto[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const companyId = await this.locationRepository.find({
          where: {
            company: {
              company_id: id,
            },
          },
          relations: ['sensor'],
        });

        if (companyId === null) {
          resolve(undefined);
        }

        const locationCounts = companyId.map((location) => {
          const sensorCount = location.sensor.length;
          const { fieldName, latitude, location_id, longitude } = location;
          return { location_id, fieldName, latitude, longitude, sensorCount };
        });

        resolve(locationCounts);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findOneWithSensors(companyId: any, locationId: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const location = await this.locationRepository.findOne({
          where: {
            location_id: locationId,
            company: {
              company_id: companyId,
            },
          },
        });
        if (location === null) {
          resolve(undefined);
        }

        const sensor = await this.sensorsRepository.find({
          where: {
            location: {
              location_id: locationId,
            },
          },
          relations: ['measurements', 'availableSensor'],
        });

        if (sensor === null) {
          resolve(undefined);
        }

        const sensorCount = sensor.length;

        const locationSensor = {
          ...location,
          sensorCount,
          sensor,
        };

        resolve(locationSensor);
      } catch (error) {
        reject(error);
      }
    });
  }
}
