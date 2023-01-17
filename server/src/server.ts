import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

/*
HTTP Methods: Get, Post, Patch, Put and Delete
*/
app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running!");
  });
