import { fastify } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { productRoutes } from "./routes/product.routes";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(fastifyJwt, {
  secret : process.env.API_SECRET as string,
});

server.register(userRoutes, {
  prefix: "/users",
});
server.register(productRoutes, {
  prefix: "/products",
});

server.listen(
  {
  port: 3333,
  },
  () => console.log("Server is running on port 3333")
);