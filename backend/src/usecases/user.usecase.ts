import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository =  new UserRepositoryPrisma();
  }

  async createUser(user: UserCreate): Promise<User> {
    const verifyUser = await this.userRepository.findByEmail(user.email);
    if(verifyUser) {
      throw new Error('User already exists');
    }
    return await this.userRepository.create(user);
  }

  async getUserByEmail(email: string): Promise<User | null>{
    return await this.userRepository.findByEmail(email);
  }
}

export { UserUseCase }