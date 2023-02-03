import mongoose from "mongoose";

const adminisProcedureSchema = mongoose.Schema({
  personalInfo: {
    type: String,
    require: true,
  },
  serialNumber: {
    type: Number,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
});

const AdminisProcedureModel = mongoose.model(
  "Administrative Procedure",
  adminisProcedureSchema
);

export default AdminisProcedureModel;
