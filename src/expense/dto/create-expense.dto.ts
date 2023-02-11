import { Expense } from '../entities/expense.entity';
import { IsString, MaxLength } from 'class-validator';

export class CreateExpenseDto extends Expense {
  @IsString()
  @MaxLength(191)
  descricao: string;
}
