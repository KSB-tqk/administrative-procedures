import mongoose from "mongoose";

const adminisProcedureSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  instruction: {
    type: String,
    require: true,
  },
});

const AdminisProcedureModel = mongoose.model(
  "Administrative Procedure",
  adminisProcedureSchema
);

export default AdminisProcedureModel;
