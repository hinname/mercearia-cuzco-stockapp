export interface User {
  id: string;
  email: string;
  userName: string;
  phoneNumber: number;
  password: string;
}

export interface UserCreate {
  email: string;
  userName: string;
  phoneNumber: number;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>;
  findByEmail(id: string): Promise<User | null>;
  login(data: UserLogin): Promise<User | null>;
}