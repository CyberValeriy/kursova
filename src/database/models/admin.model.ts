import { Schema, model, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IAdmin } from "./interfaces";

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    super: { type: Boolean, required: true },
  },
  { timestamps: true }
);

adminSchema.plugin(paginate);

export const AdminModel = model<IAdmin, PaginateModel<IAdmin>>(
  "Admin",
  adminSchema
);
