import { AdminModel } from "../../database/models";
import { ERoles } from "../../consts/enums";
import CONFIG from "../../config";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createAdmin = async (
  email: string,
  password: string,
  isSuper: boolean
) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const admin = await AdminModel.create({
    email,
    password: hashedPassword,
    super: isSuper,
  });
  const token = jwt.sign({ role: ERoles.admin }, CONFIG.JWT.SECRET, {
    subject: email,
    expiresIn: CONFIG.JWT.EXPIRES,
  });
  return { admin, token };
};
