import { Types } from "mongoose";
import { AdminModel } from "../../database/models";
import { ApiError } from "../../errors";

export const deleteAdmin = async (adminId: Types.ObjectId) => {
  if (!(await AdminModel.exists({ _id: adminId }))) {
    throw ApiError.BadRequest("Admin with such id not exist!");
  }
  const admin = await AdminModel.findOneAndDelete({ _id: adminId });
  return admin;
};
