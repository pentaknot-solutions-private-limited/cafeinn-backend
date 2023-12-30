import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MachineTypeService } from './machine-type.service';
import { MachineType } from './machine-type.schema';
import { CreateMachineTypeDto, UpdateMachineTypeDto } from './machine-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@ApiTags('Machine Types')
@Controller('machine-types')
export class MachineTypeController {
  constructor(private readonly machineTypeService: MachineTypeService) {}

  @Get()
  async findAll(): Promise<CommonResponseDto<MachineType[]>> {
    try {
      const machineTypes = await this.machineTypeService.findAll();
      return {
        data: machineTypes,
        message: 'Machine types fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch machine types',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<MachineType | null>> {
    try {
      const machineType = await this.machineTypeService.findOne(id);
      if (!machineType) {
        return {
          data: null,
          message: 'Machine type not found',
          status: 'error',
          error: 'Machine type not found',
        };
      }
      return {
        data: machineType,
        message: 'Machine type fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch machine type',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Post()
  async create(
    @Body() createMachineTypeDto: CreateMachineTypeDto,
  ): Promise<CommonResponseDto<MachineType>> {
    try {
      const newMachineType =
        await this.machineTypeService.create(createMachineTypeDto);
      return {
        data: newMachineType,
        message: 'Machine type created successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create machine type',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMachineTypeDto: UpdateMachineTypeDto,
  ): Promise<CommonResponseDto<MachineType | null>> {
    try {
      const updatedMachineType = await this.machineTypeService.update(
        id,
        updateMachineTypeDto,
      );
      if (!updatedMachineType) {
        return {
          data: null,
          message: 'Machine type not found',
          status: 'error',
          error: 'Machine type not found',
        };
      }
      return {
        data: updatedMachineType,
        message: 'Machine type updated successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update machine type',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<MachineType | null>> {
    try {
      const deletedMachineType = await this.machineTypeService.delete(id);
      if (!deletedMachineType) {
        return {
          data: null,
          message: 'Machine type not found',
          status: 'error',
          error: 'Machine type not found',
        };
      }
      return {
        data: deletedMachineType,
        message: 'Machine type deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to delete machine type',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }
}
