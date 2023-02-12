import { Prisma } from '@prisma/client';

export class Expense {
  id?: number;
  descricao: string;
  data: string;
  valor: number;
  author: Prisma.UserCreateNestedOneWithoutExpenseInput;
  authorId: number;
}
