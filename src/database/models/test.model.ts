import { Schema, model, SchemaTypes, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { ITest } from "./interfaces";

const testSchema = new Schema(
  {
    title: { type: String, required: true },
    group_id: { type: SchemaTypes.ObjectId, ref: "Group", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

testSchema.plugin(paginate);

export const TestModel = model<ITest, PaginateModel<ITest>>("Test", testSchema);
