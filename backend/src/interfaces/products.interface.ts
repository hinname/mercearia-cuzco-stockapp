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
  create(data: ProductCreate): Promise<Product>;
  searchByName(name: string): Promise<Product[] | null>;
  edit(data: Product): Promise<Product>;
}