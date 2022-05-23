import { Schema, model, SchemaTypes } from "mongoose";
import { IResult } from "./interfaces";

const resultSchema = new Schema({
  title: { type: String, required: true, unique: true },
  points: { type: Number, required: true },
  student_id: { type: SchemaTypes.ObjectId, ref: "Student" },
});

export const ResultModel = model<IResult>("Result", resultSchema);
