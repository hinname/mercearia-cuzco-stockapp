import { Product, ProductCreate, ProductRepository } from "../interfaces/products.interface";
import {ProductRepositoryPrisma } from "../repositories/product.repository";

class ProductUseCase {
  private productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepositoryPrisma();
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }

  async searchProductByName(name: string): Promise<Product[] | null> {
    return await this.productRepository.searchByName(name);
  }

  async createProduct(product: ProductCreate): Promise<void> {
    await this.productRepository.create(product);
  }

  async updateProduct(id: string, product: ProductCreate): Promise<void> {
    await this.productRepository.update(id, product);
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await this.productRepository.delete(id);
    }
    catch (err) {
      throw new Error('Erro ao deletar produto');
    }
  }
}

export { ProductUseCase };