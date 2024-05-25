import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserLogin, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {
    const result = await prisma.user.create({
      data: {
        email: data.email,
        userName: data.userName,
        phoneNumber: data.phoneNumber,
        password: data.password
      }
    })
    return result;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return result;
  }

  async login (data: UserLogin): Promise<User | null> {
    const result = await prisma.user.findFirst({
      where: {
        email: data.email,
        password: data.password
      }
    })
    return result;
  }
}

export { UserRepositoryPrisma }