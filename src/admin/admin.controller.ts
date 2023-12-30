import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.schema';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async findAll(): Promise<CommonResponseDto<Admin[]>> {
    try {
      const admins = await this.adminService.findAll();
      return {
        data: admins,
        message: 'Admins fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch admins',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Admin | null>> {
    try {
      const admin = await this.adminService.findOne(id);
      if (!admin) {
        return {
          data: null,
          message: 'Admin not found',
          status: 'error',
          error: 'Admin not found',
        };
      }
      return {
        data: admin,
        message: 'Admin fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch admin',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Post()
  async create(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<CommonResponseDto<Admin>> {
    try {
      const admin = await this.adminService.create(createAdminDto);
      return {
        data: admin,
        message: 'Admin created successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create admin',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<CommonResponseDto<Admin | null>> {
    try {
      const admin = await this.adminService.update(id, updateAdminDto);
      if (!admin) {
        return {
          data: null,
          message: 'Admin not found',
          status: 'error',
          error: 'Admin not found',
        };
      }
      return {
        data: admin,
        message: 'Admin updated successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update admin',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Admin | null>> {
    try {
      const admin = await this.adminService.delete(id);
      if (!admin) {
        return {
          data: null,
          message: 'Admin not found',
          status: 'error',
          error: 'Admin not found',
        };
      }
      return {
        data: admin,
        message: 'Admin deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to delete admin',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }
}
