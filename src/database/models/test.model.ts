import { Schema, model, SchemaTypes } from "mongoose";
import { ITest } from "./interfaces";

const testSchema = new Schema({
  title: { type: String, required: true },
  group_id: { type: SchemaTypes.ObjectId, ref: "Group", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  duration: { type: Number, required: true },
});

export const TestModel = model<ITest>("Test", testSchema);
