import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { VALIDATION } from "../consts/statusCodes";

export const validHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      status: VALIDATION,
      message: "Validation error!",
      error: errors.array()[0],
    });
  }
  next();
};
