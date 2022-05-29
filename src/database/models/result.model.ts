import { Schema, model, SchemaTypes, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IResult } from "./interfaces";

const resultSchema = new Schema({
  title: { type: String, required: true, unique: true },
  points: { type: Number, required: true },
  student_id: { type: SchemaTypes.ObjectId, ref: "Student" },
});

resultSchema.plugin(paginate);

export const ResultModel = model<IResult, PaginateModel<IResult>>(
  "Result",
  resultSchema
);
