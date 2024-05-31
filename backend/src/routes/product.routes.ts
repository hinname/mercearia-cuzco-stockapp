import { FastifyInstance } from "fastify";
import { ProductUseCase } from "../usecases/product.usecase";
import { Product, ProductCreate } from "../interfaces/products.interface";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function productRoutes(fastify: FastifyInstance) {
  const productUseCase = new ProductUseCase();

  fastify.get('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const products = await productUseCase.getAllProducts();
      reply.send(products);
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.get<{Params: {id: string}}>
  ('/:id', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const product = await productUseCase.getProductById(req.params.id);
      reply.send(product);
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.post<{Body: ProductCreate}>
  ('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      await productUseCase.createProduct(req.body);
      reply.code(201).send("Product created");
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.post<{Body: {name: string}}>
  ('/search', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const products = await productUseCase.searchProductByName(req.body.name);
      reply.send(products);
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.put<{Body: ProductCreate, Params: {id: string}}>
  ('/:id', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const product = await productUseCase.updateProduct(req.params.id, req.body);
      reply.send(product);
    } catch (err) {
      reply.send(err);
    }
  });
}