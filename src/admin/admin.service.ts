// admin.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(admin: Partial<Admin>): Promise<Admin> {
    const { username, password, role /* other properties */ } = admin;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdAdmin = new this.adminModel({
      username,
      password: hashedPassword,
      role,
      /* other properties */
    });

    return createdAdmin.save();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async findOne(id: string): Promise<Admin | null> {
    return this.adminModel.findById(id).exec();
  }

  async update(id: string, admin: Partial<Admin>): Promise<Admin | null> {
    return this.adminModel.findByIdAndUpdate(id, admin, { new: true }).exec();
  }

  async delete(id: string): Promise<Admin | null> {
    return this.adminModel
      .findByIdAndDelete(id)
      .exec() as unknown as Admin | null;
  }
}
