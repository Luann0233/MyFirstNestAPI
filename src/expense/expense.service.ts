import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
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

  async update(id: number, updateExpenseDto, currentUser) {
    const expense = await this.findOne(id);

    if (currentUser.id === expense.authorId) {
      delete updateExpenseDto.authorId;
      const updatedExpense = await this.prisma.expense.update({
        where: {
          id,
        },
        data: updateExpenseDto,
      });

      return updatedExpense;
    } else {
      return { message: 'Somente o dono dessa Despesa pode editá-la!' };
    }
  }

  async remove(id: number, currentUser) {
    const expense = await this.findOne(id);

    if (currentUser.id === expense.authorId) {
      await this.prisma.expense.delete({
        where: {
          id,
        },
      });

      return { message: 'Despesa apagada com sucesso!' };
    } else {
      return { message: 'Somente o dono dessa Despesa pode apagá-la!' };
    }
  }
}
