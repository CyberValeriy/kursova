import { Response, NextFunction } from "express";
import { TestService } from "../../services";
import { Types } from "mongoose";
import { IAuth } from "../../interfaces";
import { OK } from "../../consts/statusCodes";

export const startTest = async (
  req: IAuth,
  res: Response,
  next: NextFunction
) => {
  try {
    const { testId } = req.params;
    const data = await TestService.start(new Types.ObjectId(testId));

    res.json({
      status: OK,
      message: "Test started!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
