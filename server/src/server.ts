import cors from "@fastify/cors";
import fastify from "fastify";
import { notificationRoutes } from "./notification-routes";
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes);
app.register(notificationRoutes);

/*
HTTP Methods: Get, Post, Patch, Put and Delete
*/

app
  .listen({ port: 3333, host: "0.0.0.0" })
  .then(() => console.log("Server running!"));
