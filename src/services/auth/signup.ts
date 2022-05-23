import { StudentModel } from "../../database/models";
import { ERoles } from "../../consts/enums";
import CONFIG from "../../config";
import { Types } from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (
  email: string,
  username: string,
  password: string,
  groupId: Types.ObjectId
) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const student = await StudentModel.create({
    email,
    password: hashedPassword,
    username: username,
    group_id: groupId,
  });
  const token = jwt.sign({ role: ERoles.student }, CONFIG.JWT.SECRET, {
    subject: email,
    expiresIn: CONFIG.JWT.EXPIRES,
  });
  return { student, token };
};
