import { StudentModel } from "../../database/models";
import { ERoles } from "../../consts/enums";
import CONFIG from "../../config";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ApiError } from "../../errors";

export const login = async (email: string, password: string) => {
  const student = await StudentModel.findOne({ email }, { __v: 0 });
  const check = await bcrypt.compare(password, student.password);
  if (!check) {
    throw ApiError.BadRequest("Invalid password!");
  }
  const token = jwt.sign({ role: ERoles.student }, CONFIG.JWT.SECRET, {
    subject: email,
    expiresIn: CONFIG.JWT.EXPIRES,
  });
  return { student, token };
};
