export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  minStockQuantity: number;
  userId: string;
}

export interface ProductCreate {
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  minStockQuantity: number;
  userId: string;
}

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(data: ProductCreate): Promise<Product>;
  update(id: string, data: ProductCreate): Promise<Product>;
  searchByName(name: string): Promise<Product[] | null>;
  delete(id: string): Promise<void>;
}