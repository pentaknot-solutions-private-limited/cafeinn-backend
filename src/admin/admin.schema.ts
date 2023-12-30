import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ default: 'admin' }) // Set default role to 'admin'
  role: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
