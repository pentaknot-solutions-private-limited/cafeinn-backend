import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Category } from '../category/category.schema';

@Schema()
export class Inventory extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' }) // Reference to Category model
  category: Category; // Link to Category model

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;

  @Prop()
  costPrice: number;

  @Prop({ type: Date, default: Date.now })
  lastUpdated: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
