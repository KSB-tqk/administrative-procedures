import express, { application } from "express";
import mongoose from "mongoose";
import routes from "./controller.js";
import mongodb from "./mongodb.js";
import morgan from "morgan";
import adminisProcedureRouter from "./router.js";
import cors from "cors";

const port = process.env.PORT;

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/adminis-procedure", adminisProcedureRouter);

mongodb.then(() => console.log("Connect db success!"));

app.listen(port || 3000, () => {
  console.log("Server is up on port " + port);
});

// ESM
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.type("application/json").code(200);
  return { hello: "world" };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
