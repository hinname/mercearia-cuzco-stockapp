import { prisma } from "../database/prisma-client";
import { Product, ProductCreate, ProductRepository } from "../interfaces/products.interface";

class ProductRepositoryPrisma implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const result = await prisma.product.findMany();
    return result;
  };

  async findById(id: string): Promise<Product | null> {
    const result = await prisma.product.findUnique({
      where: {
        id: id
      }
    })
    return result;
  };

  async create(data: ProductCreate): Promise<Product> {
    const result = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        stockQuantity: data.stockQuantity,
        minStockQuantity: data.minStockQuantity,
        userId: data.userId
      }
    })
    return result;
  };

  async searchByName(name: string): Promise<Product[] | null> {
    const result = await prisma.product.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })
    return result;
  };

  async update(id: string, data: ProductCreate): Promise<Product> {
    const result = await prisma.product.update({
      where: {
        id: id
      },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        stockQuantity: data.stockQuantity,
        minStockQuantity: data.minStockQuantity,
        userId: data.userId
      }
    })
    return result;
  };

}

export { ProductRepositoryPrisma }