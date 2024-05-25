import { User, UserCreate, UserLogin, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";
import bcrypt from 'bcrypt';

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository =  new UserRepositoryPrisma();
  }

  async createUser(user: UserCreate): Promise<User> {
    const verifyUser = await this.userRepository.findByEmail(user.email);
    if(!verifyUser) {
      throw new Error('User already exists');
    }

    return await this.userRepository.create(user);
  }

  async getUserByEmail(email: string): Promise<User | null>{
    return await this.userRepository.findByEmail(email);
  }

  async login(user: UserLogin): Promise<User | null> {
    const loginUser = await this.userRepository.login(user);
    if(!loginUser) {
      throw new Error('User or password incorrect');
    }
    return loginUser;
  }
}

export { UserUseCase }