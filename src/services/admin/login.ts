import { AdminModel } from "../../database/models";
import { ERoles } from "../../consts/enums";
import CONFIG from "../../config";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ApiError } from "../../errors";

export const login = async (email: string, password: string) => {
  const admin = await AdminModel.findOne({ email }, { __v: 0 });
  const check = await bcrypt.compare(password, admin.password);
  if (!check) {
    throw ApiError.BadRequest("Invalid password!");
  }
  const token = jwt.sign({ role: ERoles.admin }, CONFIG.JWT.SECRET, {
    subject: email,
    expiresIn: CONFIG.JWT.EXPIRES,
  });
  return { admin, token };
};
