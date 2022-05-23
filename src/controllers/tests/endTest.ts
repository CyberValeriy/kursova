import { Response, NextFunction } from "express";
import { TestService } from "../../services";
import { Types } from "mongoose";
import { IEndTestReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const endTest = async (
  req: IEndTestReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req;
    const { testId, points } = req.body;
    const data = await TestService.end(
      new Types.ObjectId(testId),
      points,
      studentId
    );

    res.json({
      status: OK,
      message: "Test ended!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
