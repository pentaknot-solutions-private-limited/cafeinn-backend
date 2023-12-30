import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MachineType extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  hourlyRate: number;
}

export const MachineTypeSchema = SchemaFactory.createForClass(MachineType);
