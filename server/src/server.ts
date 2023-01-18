import cors from "@fastify/cors";
import fastify from "fastify";
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes);

/*
HTTP Methods: Get, Post, Patch, Put and Delete
*/

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running!");
  });
