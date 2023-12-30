import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.schema';
import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CommonResponseDto<Customer>> {
    try {
      const customer = await this.customerService.create(createCustomerDto);
      return {
        data: customer,
        message: 'Customer created successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create customer',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get()
  async findAll(): Promise<CommonResponseDto<Customer[]>> {
    try {
      const customers = await this.customerService.findAll();
      return {
        data: customers,
        message: 'Customers fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch customers',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Customer | null>> {
    try {
      const customer = await this.customerService.findOne(id);
      if (!customer) {
        return {
          data: null,
          message: 'Customer not found',
          status: 'error',
          error: 'Customer not found',
        };
      }
      return {
        data: customer,
        message: 'Customer fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch customer',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<CommonResponseDto<Customer | null>> {
    try {
      const customer = await this.customerService.update(id, updateCustomerDto);
      if (!customer) {
        return {
          data: null,
          message: 'Customer not found',
          status: 'error',
          error: 'Customer not found',
        };
      }
      return {
        data: customer,
        message: 'Customer updated successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update customer',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Customer | null>> {
    try {
      const customer = await this.customerService.delete(id);
      if (!customer) {
        return {
          data: null,
          message: 'Customer not found',
          status: 'error',
          error: 'Customer not found',
        };
      }
      return {
        data: customer,
        message: 'Customer deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to delete customer',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }
}
