import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schemas/expense.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  create(createExpenseDto: CreateExpenseDto) {
    const newExpense = new this.expenseModel(createExpenseDto);
    return newExpense.save();
  }

  findAll() {
    return this.expenseModel.find();
  }

  findOne(id: string) {
    return this.expenseModel.findById(id);
  }

  update(_id: string, updateExpenseDto: UpdateExpenseDto) {
    return this.expenseModel.updateOne(
      { _id: new mongoose.Types.ObjectId(_id) },
      { $set: updateExpenseDto },
    );
  }

  remove(id: string) {
    return this.expenseModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}
