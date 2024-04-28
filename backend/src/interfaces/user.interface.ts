export interface User {
  id: string;
  email: string;
  userName: string;
  password: string;
}

export interface UserCreate {
  email: string;
  userName: string;
  password: string;
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>;
  findByEmail(id: string): Promise<User | null>;
}