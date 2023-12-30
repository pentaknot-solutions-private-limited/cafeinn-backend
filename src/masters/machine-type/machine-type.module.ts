// Import necessary modules and dependencies
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineTypeController } from './machine-type.controller';
import { MachineTypeService } from './machine-type.service';
import { MachineType, MachineTypeSchema } from './machine-type.schema'; // Import the schema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MachineType.name, schema: MachineTypeSchema },
    ]), // Register the schema
    // Other necessary imports
  ],
  controllers: [MachineTypeController],
  providers: [MachineTypeService],
})
export class MachineTypeModule {}
