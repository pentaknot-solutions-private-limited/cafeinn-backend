// Import necessary modules and dependencies
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventory, InventorySchema } from './inventory.schema';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
    ]), // Register the schema
    // Other necessary imports
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
