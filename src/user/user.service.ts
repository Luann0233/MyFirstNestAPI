import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findAll() {
    const listUsers = await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        expense: true,
      },
    });
    return listUsers;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        expense: true,
      },
    });
    return user;
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUserFormated = {
      ...updateUserDto,
      password: await bcrypt.hash(updateUserDto.password, 10),
    };

    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserFormated,
    });

    return {
      ...updateUser,
      password: undefined,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
