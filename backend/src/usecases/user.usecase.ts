import { User, UserCreate, UserLogin, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";
import bcrypt from 'bcrypt';

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository =  new UserRepositoryPrisma();
  }
  async login(user: UserLogin): Promise<User | null> {
    const userExists = await this.userRepository.findByEmail(user.email);
    if(!userExists) {
      throw new Error('User or password incorrect');
    }
    const comparePassword = await bcrypt.compare(user.password, userExists.password);
    if(!comparePassword) {
      throw new Error('User or password incorrect');
    }
    user.password = userExists.password;
    const loginUser = await this.userRepository.login(user);
    if(!loginUser) {
      throw new Error('User or password incorrect');
    }
    return loginUser;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async searchUsersByName(userName: string): Promise<User[]> {
    return await this.userRepository.searchByName(userName);
  }

  async createUser(user: UserCreate): Promise<void> {
    const verifyUser = await this.userRepository.findByEmail(user.email);
    if(verifyUser) {
      throw new Error('User already exists');
    }
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS as string), (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        user.password = hash;
        return await this.userRepository.create(user);
      });
    })
  }
  
  async updateUser(id: string, user: UserCreate): Promise<User | null> {
    const verifyUser = await this.userRepository.findById(id);
    if(!verifyUser) {
      throw new Error('User not found');
    }
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS as string), (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        user.password = hash;
      });
    })
    return await this.userRepository.update(id, user);
  }
}

export { UserUseCase }