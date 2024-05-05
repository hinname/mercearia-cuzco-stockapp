import { FastifyInstance } from "fastify";
import { ProductUseCase } from "../usecases/product.usecase";
import { Product, ProductCreate } from "../interfaces/products.interface";

export async function productRoutes(fastify: FastifyInstance) {
  const productUseCase = new ProductUseCase();

  fastify.post<{Body: ProductCreate}>('/', async (req, res) => {
    try {
      const product = await productUseCase.CreateProduct(req.body);
      res.code(201).send(product);
    } catch (err) {
      res.send(err);
    }
  });

  fastify.post<{Body: {name: string}}>('/search', async (req, res) => {
    try {
      const products = await productUseCase.SearchProductByName(req.body.name);
      res.send(products);
    } catch (err) {
      res.send(err);
    }
  });

  fastify.put<{Body: Product}>('/', async (req, res) => {
    try {
      const product = await productUseCase.EditProduct(req.body);
      res.send(product);
    } catch (err) {
      res.send(err);
    }
  });
}