import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();
  fastify.post<{Body: UserCreate}>('/', async (req, res) => {
    try {
      const data = await userUseCase.createUser(req.body);
      return res.send(data);
    } catch(err) {
      res.send(err)
    }
  })

  fastify.get<{Body: {email: string}}>('/find', async (req, res) => {
    try {
      const data = await userUseCase.getUserByEmail(req.body.email);
      return res.send(data);
    } catch(err) {
      res.send(err)
    }
  })
}