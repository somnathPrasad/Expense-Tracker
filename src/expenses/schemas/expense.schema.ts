import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({ timestamps: true })
export class Expense {
  _id: ObjectId;
  createdAt: Date;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  amount: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
