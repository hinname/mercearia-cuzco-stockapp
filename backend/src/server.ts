import { fastify } from "fastify";
import { userRoutes } from "./routes/user.routes";

const server = fastify();

server.register(userRoutes, {
  prefix: "/users",
});

server.listen(
  {
  port: 3333,
  },
  () => console.log("Server is running on port 3333")
);