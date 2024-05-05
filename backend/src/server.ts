import { fastify } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { productRoutes } from "./routes/product.routes";

const server = fastify();

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