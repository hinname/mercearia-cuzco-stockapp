import { FastifyRequest, FastifyReply } from "fastify";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  try {
    await req.jwtVerify();
  }
  catch {
    reply.code(401).send({ message: 'Unauthorized' });
  }
}