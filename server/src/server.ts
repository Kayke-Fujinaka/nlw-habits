import fastify from "fastify";

const app = fastify();

/*
HTTP Methods: Get, Post, Patch, Put and Delete
*/

app.get("/", () => {
  return "Hello World";
});

app.listen({
  port: 3333,
});
