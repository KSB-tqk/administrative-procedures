import express from "express";
import administrativeProcedureController from "./controller.js";

const adminisProcedureRouter = express.Router();

adminisProcedureRouter.get(
  "/:id",
  administrativeProcedureController.getAdminisProcedure
);

adminisProcedureRouter.post(
  "/",
  administrativeProcedureController.addAdminisProcedure
);

adminisProcedureRouter.patch(
  "/:id",
  administrativeProcedureController.updateAdminisProcedure
);

adminisProcedureRouter.get(
  "/",
  administrativeProcedureController.getAllAdminisProcedures
);

adminisProcedureRouter.delete(
  "/:id",
  administrativeProcedureController.deleteAdminisProcedure
);

export default adminisProcedureRouter;
