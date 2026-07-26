import type { User } from '../../generated/prisma/client.js';
import { prisma } from '../config/database.js';

export async function getAll() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getById(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export async function add(data: any) {
  const user: User = await prisma.user.create({
    data,
  });
  return user;
}

export async function update(id: number, data: any) {
  const user: User = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
}

export async function remove(id: number) {
  const user: User = await prisma.user.delete({
    where: { id },
  });
  return user;
}
