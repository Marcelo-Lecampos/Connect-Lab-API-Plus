import { UpdateSensorDto } from './dto/update-sensor.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Put,
  UseGuards,
  Res,
  Request,
} from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { LinkSensorDto } from './dto/link-sensor.dto';
import { LinkSensorParamDto } from './dto/link-sensor-param.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RegisterMeasurementDto } from './dto/register-measurement.dto';
import { RegisterMeasurementParamDto } from './dto/register-measurement-param.dto';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { UnlinkSensorDTO } from './dto/unlink-sensor.dto';
import { Response } from 'express';
import { ApiPopulateDoc } from './decorators/populate.decorator';
import { ApiFindAllAvailableSensorsDoc } from './decorators/findAllAvailableSensors.decorator';
import { ApiLinkSensorDoc } from './decorators/linkSensor.decorator';
import { ApiRegisterMeasurementDoc } from './decorators/registerMeasurement.decorator';
import { ApiFindSensorsDoc } from './decorators/findSensors.decorator';
import { ApiOverviewDoc } from './decorators/overview.decorator';
import { ApiUnlinkSensorDoc } from './decorators/unlinkSensor.decorator';
import { SensorIdParamDto } from './dto/sensor-id-param-dto';
import { ApiEditLinkedSensorDoc } from './decorators/editLinkedSensor.decorator';
import { PopulateSuccessDto } from './dto/populate-success-dto';
import { SensorEntity } from './entities/sensor.entity';
import { MeasurementEntity } from './entities/measurement.entity';
import { GetSensorsSuccess } from './dto/get-sensors-success';
import { OverviewSuccess } from './dto/overview-success.dto';
import { FindAllAvailableSensorsSuccessfulResponseDto } from './dto/find-all-available-sensors-success.dto';

@ApiTags('sensors')
@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @ApiPopulateDoc()
  @Post('populate')
  async populate(): Promise<PopulateSuccessDto> {
    try {
      const { message, statusCode } = await this.sensorsService.populate();
      return { message, statusCode };
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiFindAllAvailableSensorsDoc()
  @Get('available')
  async findAllAvailableSensors(): Promise<
    FindAllAvailableSensorsSuccessfulResponseDto[]
  > {
    try {
      const availableSensors =
        await this.sensorsService.findAllAvailableSensors();
      return availableSensors;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiLinkSensorDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('link-sensor/:location_id')
  async linkSensor(
    @Body() linkSensorDto: LinkSensorDto,
    @Param() { location_id }: LinkSensorParamDto,
    @Request() req: any,
  ): Promise<SensorEntity> {
    try {
      return await this.sensorsService.linkSensor(
        +location_id,
        linkSensorDto,
        +req.user.id,
      );
    } catch (error) {
      if (typeof error === 'string') {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, message: error },
          HttpStatus.NOT_FOUND,
        );
      }

      if (error.code == 23505)
        throw new HttpException(
          {
            message: 'Já existe um sensor cadastrado com esse Mac Address.',
            errorCode: HttpStatus.CONFLICT,
          },
          HttpStatus.CONFLICT,
        );

      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiRegisterMeasurementDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('sensor-data/:sensor_id')
  async registerMeasurement(
    @Body() { measurement }: RegisterMeasurementDto,
    @Param() { sensor_id }: RegisterMeasurementParamDto,
    @Request() req: any,
  ): Promise<MeasurementEntity> {
    try {
      return await this.sensorsService.registerMeasurement(
        +sensor_id,
        measurement,
        +req.user.id,
      );
    } catch (error) {
      if (typeof error === 'string') {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, message: error },
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiFindSensorsDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':location_id')
  async findSensors(
    @Param() { location_id }: LinkSensorParamDto,
    @Request() req: any,
  ): Promise<GetSensorsSuccess[]> {
    try {
      const sensors = await this.sensorsService.getSensors(
        +location_id,
        +req.user.id,
      );

      if (sensors === undefined) {
        throw new HttpException(
          { message: `ID ${location_id} de locations não encontrado` },
          HttpStatus.NOT_FOUND,
        );
      }
      return sensors;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
  }

  @ApiOverviewDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('overview/:location_id')
  async overview(
    @Request() req: any,
    @Param() { location_id }: LinkSensorParamDto,
  ): Promise<OverviewSuccess[] | string> {
    try {
      const sensors = await this.sensorsService.overview(
        +req.user.id,
        +location_id,
      );

      if (sensors === undefined) {
        throw new HttpException(
          { message: `ID ${location_id} de locations não encontrado` },
          HttpStatus.NOT_FOUND,
        );
      }
      return sensors;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiUnlinkSensorDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/unlink-sensor')
  async unlinkSensor(
    @Body() unlinkSensor: UnlinkSensorDTO,
    @Res() res: Response,
    @Request() req: any,
  ): Promise<void> {
    try {
      await this.sensorsService.unlinkSensor(unlinkSensor, +req.user.id);
      res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: `Sensor desvinculado de local com sucesso!`,
      });
    } catch (error) {
      if (typeof error === 'object') {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, message: error },
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiEditLinkedSensorDoc()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('linked-sensors/:sensor_id')
  async editSensor(
    @Body() sensor: UpdateSensorDto,
    @Request() req: any,
    @Param() { sensor_id }: SensorIdParamDto,
  ): Promise<SensorEntity> {
    try {
      const result = await this.sensorsService.editLinkedSensor({
        sensor,
        sensor_id,
        userId: req.user.id,
      });

      return result;
    } catch (error) {
      if (typeof error === 'string') {
        throw new HttpException({ error }, HttpStatus.NOT_FOUND);
      }
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}
