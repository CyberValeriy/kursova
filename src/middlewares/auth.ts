import { Response, NextFunction } from "express";
import { ApiError } from "../errors";
import { IAuth, IAuthAdmin } from "../interfaces";
import jwt from "jsonwebtoken";
import { StudentModel, AdminModel } from "../database/models";
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

export const authAdmin = async (
  req: IAuthAdmin,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return next(ApiError.UnauthorizedError("No auth header!"));
  }

  try {
    const token = authHeader.split(" ")[1];
    if (!token) return next(ApiError.UnauthorizedError("No token!"));

    const verifiedData: any = jwt.verify(token, CONFIG.JWT.SECRET);
    const { sub } = verifiedData;

    const admin = await AdminModel.findOne({ email: sub });
    if (!admin) {
      return next(ApiError.ForbiddenError("Admin not exist!"));
    }

    req.admin = admin;
    req.admin = admin._id;
    req.super = admin.super;
    next();
  } catch (err) {
    next(err);
  }
};
