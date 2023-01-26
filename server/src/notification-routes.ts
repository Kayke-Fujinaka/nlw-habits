import { FastifyInstance } from "fastify";
import WebPush from "web-push";
import { z } from "zod";

const publicKey =
  "BBeQaz0wD5A-_UdPhI3jYnwJHPvKYC8V7zZiXszejPBHa075jOXYf7NExE2L1oprq7tMKqStnB714_I9awARo2c";

const privatKey = "aNViGPZu4UONMMCfqE8pcVdDKb7Fg3bITNxajxAKNck";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privatKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return {
      publicKey,
    };
  });

  app.post("/push/register", (request, reply) => {
    console.log(request.body);

    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, "Hello do Back-end");
    }, 5000);

    return reply.status(201).send();
  });
}
