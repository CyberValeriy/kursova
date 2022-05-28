import { StudentModel, VerifyModel } from "../../database/models";
import { ApiError } from "../../errors/error.custom";
import { ERoles } from "../../consts/enums";
import CONFIG from "../../config";
import { Types } from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (
  email: string,
  username: string,
  password: string,
  groupId: Types.ObjectId,
  code: string
) => {
  const verify = await VerifyModel.findOne({ email });
  if (!(await bcrypt.compare(code, verify.code))) {
    throw ApiError.BadRequest("Invalid verification code!");
  }
  await VerifyModel.deleteOne({ email });
  console.log(password);
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
