import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpenseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExpenseDto: CreateExpenseDto) {
    const data: Prisma.ExpenseCreateInput = createExpenseDto;

    try {
      const createdExpense = await this.prisma.expense.create({ data });

      return createdExpense;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2003') {
          return {
            message: 'Esse usuário não exite. Indique um usuário válido!',
          };
        }
      }
    }
  }

  findAll() {
    return this.prisma.expense.findMany();
  }

  findOne(id: number) {
    return this.prisma.expense.findUnique({
      where: { id },
    });
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  async remove(id: number) {
    await this.prisma.expense.delete({
      where: {
        id,
      },
    });

    return { message: 'Despesa apagada com sucesso!' };
  }
}
