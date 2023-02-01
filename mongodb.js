import mongoose from "mongoose";

console.log(process.env.MONGODB_URL);

const mongooseDB = mongoose.connect(process.env.MONGODB_URL);

export default mongooseDB;
