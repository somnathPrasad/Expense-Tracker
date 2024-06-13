import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsNumber()
  amount: number;
}
