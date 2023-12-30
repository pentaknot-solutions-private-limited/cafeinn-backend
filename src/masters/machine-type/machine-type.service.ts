import { Injectable } from '@nestjs/common';
import { CreateMachineTypeDto, UpdateMachineTypeDto } from './machine-type.dto';
import { MachineType } from './machine-type.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MachineTypeService {
  constructor(
    @InjectModel(MachineType.name) private machineTypeModel: Model<MachineType>,
  ) {}

  async create(
    createMachineTypeDto: CreateMachineTypeDto,
  ): Promise<MachineType> {
    try {
      const createdMachineType = new this.machineTypeModel(
        createMachineTypeDto,
      );
      return createdMachineType.save();
    } catch (error) {
      // Handle error (e.g., log, throw custom exception)
      throw new Error('Unable to create MachineType');
    }
  }

  async findAll(): Promise<MachineType[]> {
    try {
      return this.machineTypeModel.find().exec();
    } catch (error) {
      // Handle error
      throw new Error('Unable to find MachineTypes');
    }
  }

  async findOne(id: string): Promise<MachineType | null> {
    try {
      return this.machineTypeModel.findById(id).exec();
    } catch (error) {
      // Handle error
      throw new Error('Unable to find MachineType by ID');
    }
  }

  async update(
    id: string,
    updateMachineTypeDto: UpdateMachineTypeDto,
  ): Promise<MachineType | null> {
    try {
      return this.machineTypeModel
        .findByIdAndUpdate(id, updateMachineTypeDto, { new: true })
        .exec();
    } catch (error) {
      // Handle error
      throw new Error('Unable to update MachineType');
    }
  }

  async delete(id: string): Promise<MachineType | null> {
    try {
      return this.machineTypeModel
        .findByIdAndDelete(id)
        .exec() as unknown as MachineType | null;
    } catch (error) {
      // Handle error
      throw new Error('Unable to delete MachineType');
    }
  }
}
