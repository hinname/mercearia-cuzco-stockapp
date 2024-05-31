export interface User {
  id: string;
  email: string;
  userName: string;
  phoneNumber: string;
  password: string;
}

export interface UserCreate {
  email: string;
  userName: string;
  phoneNumber: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, data: UserCreate): Promise<User | null>;
  login(data: UserLogin): Promise<User | null>;
  searchByName(userName: string): Promise<User[]>;
}