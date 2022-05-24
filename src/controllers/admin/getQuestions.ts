import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { OK } from "../../consts/statusCodes";

export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { testId } = req.params;
    const data = await AdminService.getQuestions(new Types.ObjectId(testId));
    res.json({
      status: OK,
      message: "Students fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
