import { add, getAll, getById, remove, update } from '../repositories/user.repository.js';
import { notFound } from '../utils/api-error.js';

export async function findAllUsers() {
  const users = await getAll();
  return users;
}

export async function findUserById(id: number) {
  const user = await getById(id);
  if (!user) {
    throw notFound('User Not Found');
  }
  return user;
}

export async function createUser(data: any) {
  const user = await add(data);
  return user;
}

export async function updateUser(id: number, data: any) {
  const user = await update(id, data);
  return user;
}

export async function deleteUser(id: number) {
  const user = await remove(id);
  return user;
}
