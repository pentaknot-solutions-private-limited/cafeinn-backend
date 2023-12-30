import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
