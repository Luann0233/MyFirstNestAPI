import { Expense } from '../entities/expense.entity';
import {
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  IsDateString,
  IsISO8601,
} from 'class-validator';

export class CreateExpenseDto extends Expense {
  @IsString()
  @MaxLength(191)
  descricao: string;

  @IsString()
  @IsISO8601()
  @IsDateString()
  data: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsNumber()
  authorId: number;
}
