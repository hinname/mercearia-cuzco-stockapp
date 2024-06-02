export interface IProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  minStockQuantity: number;
  userId: string;
}

export interface IProductCreate {
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  minStockQuantity: number;
}

export interface IUser {
  id: string;
  email: string;
  userName: string;
  phoneNumber: number;
  password: string;
}

export interface IUserCreate {
  email: string;
  userName: string;
  phoneNumber: string;
  password: string;
}