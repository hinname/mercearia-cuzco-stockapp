import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserLogin, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {

  async login (data: UserLogin): Promise<User | null> {
    const result = await prisma.user.findFirst({
      where: {
        email: data.email,
        password: data.password
      }
    })
    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await prisma.user.findMany();
    return result;
  }

  async findById(id: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        id
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

  async searchByName(userName: string): Promise<User[]> {
    const result = await prisma.user.findMany({
      where: {
        userName: {
          contains: userName
        }
      }
    })
    return result;
  }

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

  async update(id: string, data: UserCreate): Promise<User | null> {
    const result = await prisma.user.update({
      where: {
        id
      },
      data: {
        email: data.email,
        userName: data.userName,
        phoneNumber: data.phoneNumber,
        password: data.password
      }
    })
    return result;
  }
}

export { UserRepositoryPrisma }