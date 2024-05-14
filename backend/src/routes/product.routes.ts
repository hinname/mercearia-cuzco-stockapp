import { FastifyInstance } from "fastify";
import { ProductUseCase } from "../usecases/product.usecase";
import { Product, ProductCreate } from "../interfaces/products.interface";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function productRoutes(fastify: FastifyInstance) {
  const productUseCase = new ProductUseCase();

  fastify.post<{Body: ProductCreate}>('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const product = await productUseCase.CreateProduct(req.body);
      reply.code(201).send(product);
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.post<{Body: {name: string}}>('/search', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const products = await productUseCase.SearchProductByName(req.body.name);
      reply.send(products);
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.put<{Body: Product}>('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const product = await productUseCase.EditProduct(req.body);
      reply.send(product);
    } catch (err) {
      reply.send(err);
    }
  });
}