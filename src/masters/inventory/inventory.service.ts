import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inventory } from './inventory.schema';
import { CreateInventoryDto, UpdateInventoryDto } from './inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    return this.inventoryModel.create(createInventoryDto);
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }

  async findOne(id: string): Promise<Inventory | null> {
    return this.inventoryModel.findById(id).exec();
  }

  async update(
    id: string,
    updateInventoryDto: UpdateInventoryDto,
  ): Promise<Inventory | null> {
    return this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<Inventory | null> {
    return this.inventoryModel
      .findByIdAndDelete(id)
      .exec() as unknown as Inventory | null;
  }
}
