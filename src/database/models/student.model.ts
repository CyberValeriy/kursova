import { Schema, model, SchemaTypes } from "mongoose";
import { IStudent } from "./interfaces";

const studentSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  group_id: { type: SchemaTypes.ObjectId, ref: "Group" },
  tests: [{ type: SchemaTypes.ObjectId, ref: "Test" }],
});

export const StudentModel = model<IStudent>("Student", studentSchema);
