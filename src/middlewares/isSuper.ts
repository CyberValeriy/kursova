import { Response, NextFunction } from "express";
import { IAuthAdmin } from "../interfaces";
import { ApiError } from "../errors";

export const isSuper = (req: IAuthAdmin, res: Response, next: NextFunction) => {
  if (!req.super) {
    next(ApiError.BadRequest("You don't have premission!"));
  }

  next();
};
