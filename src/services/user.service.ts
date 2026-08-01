import { conflict, notFound } from '../utils/api-error.js';
import UserRepository from '../repositories/user.repository.js';
import type { createUserDto, updateUserDto } from '../dtos/user.dto.js';
import { createUniqueSlug } from '../utils/helper.js';

export default class UserService {
  static async findUserById(id: number) {
    const user = await UserRepository.getById(id);
    if (!user) {
      throw notFound('User Not Found');
    }
    return user;
  }

  static async createUser(data: createUserDto) {
    const existingUser = await UserRepository.findByEmail(data.email);
    if (existingUser) {
      throw conflict('User already exists');
    }
    const slugPassed = data.slug ? data.slug : createUniqueSlug(data.name);
    return UserRepository.create({ ...data, slug: slugPassed });
  }

  static async updateUser(id: number, data: updateUserDto) {
    const existingUser = await UserRepository.getById(id);
    if (!existingUser) {
      throw conflict('User already exists');
    }
    return UserRepository.update(id, data);
  }
}
