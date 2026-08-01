import { prisma } from '../config/database.js';
import type { createUserDto, updateUserDto } from '../dtos/user.dto.js';

export default class UserRepository {
  static async getById(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  static async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email }
    });
    return user;
  }

  static async create(data: createUserDto & { slug: string }) {
    const user = await prisma.user.create({
      data
    });
    return user;
  }

  static async update(id: number, data: updateUserDto) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  }

  static async delete(id: number) {
    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  }
}