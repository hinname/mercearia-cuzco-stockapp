import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate, UserLogin } from "../interfaces/user.interface";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();
  fastify.post<{Body: UserCreate}>('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.createUser(req.body);
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  })

  fastify.post<{Body: {email: string}}>('/find', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.getUserByEmail(req.body.email);
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  })

  fastify.post<{Body: UserLogin}>('/login', async (req, reply) => {
    let user = null;
    try {
      user = await userUseCase.login(req.body);
    } catch(err) {
      return reply.code(401).send(err);
    }

    try {
      const token = await reply.jwtSign({id: user?.id, login: user?.email}, {expiresIn: '12h'});
      return reply.send({token});
    } catch(err) {
      return reply.status(500).send({msg: 'Falha interna', err});
    }
  })
}