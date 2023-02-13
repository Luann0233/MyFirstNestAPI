import { Expense } from '../entities/expense.entity';
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateExpenseDto extends Expense {
  @IsString()
  @MaxLength(191)
  descricao: string;

  @IsString()
  @MaxLength(10)
  data: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsNumber()
  authorId: number;
}
