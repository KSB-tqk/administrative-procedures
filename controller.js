import express from "express";
import AdminisProcedureModel from "./models/administrative_procedure.js";
import { sendSMS, sendSMS2 } from "./sms_service.js";

const administrativeProcedureController = {
  addAdminisProcedure: async (req, res) => {
    try {
      const adminisProcedure = new AdminisProcedureModel(req.body);

      console.log(req.body);

      adminisProcedure.serialNumber = (await AdminisProcedureModel.count()) + 1;

      await adminisProcedure.save();

      sendSMS(
        adminisProcedure.personalInfo,
        adminisProcedure.serialNumber,
        adminisProcedure.phoneNumber
      );

      res.status(200).send({
        msg: "Create adminisProcedure successfully",
        adminisProcedure,
      });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  },
  updateAdminisProcedure: async (req, res) => {
    const id = req.params.id;

    const harvest = await AdminisProcedureModel.findById(id).exec();

    if (!harvest) {
      return res
        .status(400)
        .send({ msg: "This adminisProcedure doesn't exist" });
    }

    AdminisProcedureModel.findOne(
      { _id: req.params.id },
      function (err, adminisProcedure) {
        if (err) {
          res.send(422, "Update adminisProcedure failed");
        } else {
          //update fields
          for (var field in AdminisProcedureModel.schema.paths) {
            if (field !== "_id" && field !== "__v") {
              if (req.body[field] !== undefined) {
                adminisProcedure[field] = req.body[field];
              }
            }
          }
          adminisProcedure.save();
          res.status(200).send({ adminisProcedure });
        }
      }
    );
  },
  deleteAdminisProcedure: async (req, res) => {
    try {
      const id = req.params.id;

      const harvest = await AdminisProcedureModel.findById(id).exec();

      if (!harvest) {
        return res.status(400).send({ msg: "This harvest doesn't exist" });
      }

      await AdminisProcedureModel.findByIdAndRemove(id);
      res.status(200).send({ msg: "Delete adminisProcedure success" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  },
  getAllAdminisProcedures: async (req, res) => {
    try {
      const { id } = req.params;

      console.log(id);

      const lands = await AdminisProcedureModel.find({ farmId: id }).exec();
      res.status(200).send(lands);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  },
  getAdminisProcedure: async (req, res) => {
    try {
      const id = req.params.id;

      const adminisProcedure = await AdminisProcedureModel.findById(id).exec();

      if (!adminisProcedure) {
        return res
          .status(400)
          .send({ msg: "This adminisProcedure doesn't exist" });
      }

      res.status(200).send(adminisProcedure);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  },
};

export default administrativeProcedureController;
