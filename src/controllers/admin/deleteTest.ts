import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { OK } from "../../consts/statusCodes";

export const deleteTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { testId } = req.params;
    const data = await AdminService.deleteTest(new Types.ObjectId(testId));
    res.json({
      status: OK,
      message: "Test deleted!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
