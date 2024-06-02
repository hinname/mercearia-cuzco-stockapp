import { FastifyInstance } from "fastify";
import { ProductUseCase } from "../usecases/product.usecase";
import { Product, ProductCreate } from "../interfaces/products.interface";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UserUseCase } from "../usecases/user.usecase";
import { jwtPayload } from "../interfaces/jwt.interface";

export async function productRoutes(fastify: FastifyInstance) {
  const productUseCase = new ProductUseCase();
  const userUseCase = new UserUseCase();

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
      const token = await req.jwtDecode() as jwtPayload;
      req.body.userId = token.id;
      await productUseCase.createProduct(req.body);
      reply.code(201).send("Product created");
    } catch (err) {
      console.log(err)
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