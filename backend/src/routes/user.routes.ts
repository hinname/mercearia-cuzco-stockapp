import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate, UserLogin } from "../interfaces/user.interface";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();

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
  });

  fastify.get('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.getUsers();
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  });

  fastify.get<{Params: {id: string}}>
    ('/:id', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.getUserById(req.params.id);
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  });

  fastify.post<{Body: {userName: string}}>
  ('/search', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.searchUsersByName(req.body.userName);
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  });

  fastify.post<{Body: UserCreate}>
  ('/', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      await userUseCase.createUser(req.body);
      return reply.send("User created");
    } catch(err) {
      reply.send(err)
    }
  });

  fastify.put<{Body: UserCreate, Params: {id: string}}>
  ('/:id', {onRequest: authMiddleware}, async (req, reply) => {
    try {
      const data = await userUseCase.updateUser(req.params.id, req.body);
      return reply.send(data);
    } catch(err) {
      reply.send(err)
    }
  });
}