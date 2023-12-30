import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.schema';
import { CreateInventoryDto, UpdateInventoryDto } from './inventory.dto';
import { ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@ApiTags('Inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  async create(
    @Body() createInventoryDto: CreateInventoryDto,
  ): Promise<CommonResponseDto<Inventory>> {
    try {
      const inventory = await this.inventoryService.create(createInventoryDto);
      return {
        data: inventory,
        message: 'Inventory item created successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create inventory item',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get()
  async findAll(): Promise<CommonResponseDto<Inventory[]>> {
    try {
      const inventoryList = await this.inventoryService.findAll();
      return {
        data: inventoryList,
        message: 'Inventory items fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch inventory items',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Inventory | null>> {
    try {
      const inventoryItem = await this.inventoryService.findOne(id);
      if (!inventoryItem) {
        return {
          data: null,
          message: 'Inventory item not found',
          status: 'error',
          error: 'Inventory item not found',
        };
      }
      return {
        data: inventoryItem,
        message: 'Inventory item fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch inventory item',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ): Promise<CommonResponseDto<Inventory | null>> {
    try {
      const updatedInventoryItem = await this.inventoryService.update(
        id,
        updateInventoryDto,
      );
      if (!updatedInventoryItem) {
        return {
          data: null,
          message: 'Inventory item not found',
          status: 'error',
          error: 'Inventory item not found',
        };
      }
      return {
        data: updatedInventoryItem,
        message: 'Inventory item updated successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update inventory item',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<CommonResponseDto<Inventory | null>> {
    try {
      const deletedInventoryItem = await this.inventoryService.delete(id);
      if (!deletedInventoryItem) {
        return {
          data: null,
          message: 'Inventory item not found',
          status: 'error',
          error: 'Inventory item not found',
        };
      }
      return {
        data: deletedInventoryItem,
        message: 'Inventory item deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to delete inventory item',
        status: 'error',
        error: error.message || 'Internal server error',
      };
    }
  }
}
