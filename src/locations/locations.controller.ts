import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  HttpCode,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocationEntity } from './entities/location.entity';
import { AvailableSensorsEntity } from 'src/sensors/entities/available-sensors.entity';
import { ApiFindAllWithSensorsDoc } from './decorators/get-all.decorator';
import { sharedResponses } from 'src/shared/documentation/swagger.shared.responses';
import { ApiCreateDoc } from './decorators/create.decorator';
import { ApiDeleteDoc } from './decorators/delete.decorator';
import { LocationParamDto } from './dto/params-location.dto';
import { ApiUpdateDoc } from './decorators/update.decorator';
import {  getLocationDto } from './dto/get-location.dto';
import { ApifindOneWithSensorsDoc } from './decorators/get-id.decorator';

@ApiTags('locations')
@ApiBearerAuth()
@ApiResponse(sharedResponses.Unauthorized)
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiCreateDoc()
  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  async create(
    @Request() req: any,
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<LocationEntity> {
    try {
      const result = await this.locationsService.create(
        req.user.id,
        createLocationDto,
      )
      return result;
    } catch (error) {
      if (error.code == 23505)
        // já existe um registro com o mesmo nome no banco de dados
        throw new HttpException(
          { message: error.detail, errorCode: HttpStatus.CONFLICT },
          HttpStatus.CONFLICT,
        );

      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiDeleteDoc()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Delete(':location_id')
  async delete(
    @Request() req: any,
    @Param(){location_id}: LocationParamDto,
    ): Promise<{ message: string }> {
    try {
      const result = await this.locationsService.delete(+req.user.id,+location_id);
      return { message: 'Local excluído com sucesso!' };
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiUpdateDoc()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Patch(':location_id')
  async update(
    @Request() req: any,
    @Param(){location_id}: LocationParamDto,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<{ message: string }> {
    try {
      const updatedLocation = await this.locationsService.update(
        +req.user.id,
        +location_id,
        updateLocationDto,
      );
      if (updatedLocation) {
        return { message: 'Local atualizado com sucesso' };
      } else {
        throw new HttpException(
          { message: 'Local não encontrado' },
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiFindAllWithSensorsDoc()
  @UseGuards(JwtAuthGuard)
  @Get('all')
  async requestAllWithSensors( @Request() req: any): Promise<getLocationDto[]> {
    try {
      const locationsGet = await this.locationsService.findAllWithSensors(req.user.id);

      if (locationsGet === undefined) {
        throw new HttpException(
          { message: `Não há locais cadastrados` },
          HttpStatus.NOT_FOUND,
        );
      }
       
      return locationsGet;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  @ApifindOneWithSensorsDoc()
  @UseGuards(JwtAuthGuard)
  @Get(':location_id')
  async findLocation( @Request() req: any,
  @Param(){location_id}: LocationParamDto,
  ): Promise<getLocationDto> {
    try {
      const locationsGet = await this.locationsService.findOneWithSensors(req.user.id, location_id);

      if (locationsGet === undefined) {
        throw new HttpException(
          { message: `Não há locais cadastrados` },
          HttpStatus.NOT_FOUND,
        );
      }
       
      return locationsGet;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

}
