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
