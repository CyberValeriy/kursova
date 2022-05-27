import { Schema, model } from "mongoose";
import { IVerify } from "./interfaces";

const verifySchema = new Schema({
  email: { type: String, required: true, unique: true },
  code: { type: String, required: true },
});

export const VerifyModel = model<IVerify>("Verify", verifySchema);
