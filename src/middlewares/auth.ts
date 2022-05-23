import { Response, NextFunction } from "express";
import { ApiError } from "../errors";
import { IAuth } from "../interfaces";
import jwt from "jsonwebtoken";
import { StudentModel } from "../database/models";
import CONFIG from "../config";

export const auth = async (req: IAuth, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return next(ApiError.UnauthorizedError("No auth header!"));
  }

  try {
    const token = authHeader.split(" ")[1];
    if (!token) return next(ApiError.UnauthorizedError("No token!"));

    const verifiedData: any = jwt.verify(token, CONFIG.JWT.SECRET);
    const { sub } = verifiedData;

    const student = await StudentModel.findOne({ email: sub });
    if (!student) {
      return next(ApiError.ForbiddenError("Student not exist!"));
    }

    req.student = student;
    req.studentId = student._id;
    next();
  } catch (err) {
    next(err);
  }
};
