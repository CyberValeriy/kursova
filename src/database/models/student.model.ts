import { Schema, model, SchemaTypes, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IStudent } from "./interfaces";

const studentSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    group_id: { type: SchemaTypes.ObjectId, ref: "Group" },
    tests: [{ type: SchemaTypes.ObjectId, ref: "Test" }],
  },
  {
    timestamps: true,
  }
);

studentSchema.plugin(paginate);

export const StudentModel = model<IStudent, PaginateModel<IStudent>>(
  "Student",
  studentSchema
);
