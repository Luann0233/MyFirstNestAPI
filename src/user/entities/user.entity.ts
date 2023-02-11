import { Prisma } from '@prisma/client';

export class User {
  id?: number;
  email: string;
  password: string;
  name: string;
  expense?: Prisma.ExpenseCreateNestedManyWithoutAuthorInput;
}
