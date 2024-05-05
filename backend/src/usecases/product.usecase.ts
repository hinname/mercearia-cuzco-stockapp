import { Product, ProductCreate, ProductRepository } from "../interfaces/products.interface";
import {ProductRepositoryPrisma } from "../repositories/product.repository";

class ProductUseCase {
  private productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepositoryPrisma();
  }

  async CreateProduct(product: ProductCreate): Promise<Product> {
    return await this.productRepository.create(product);
  }

  async SearchProductByName(name: string): Promise<Product[] | null> {
    return await this.productRepository.searchByName(name);
  }

  async EditProduct(product: Product): Promise<Product> {
    return await this.productRepository.edit(product);
  }
}

export { ProductUseCase };