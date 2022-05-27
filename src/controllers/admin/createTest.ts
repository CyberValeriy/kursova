import { Request, Response, NextFunction } from "express";
import { AdminService } from "../../services";
import { CREATED } from "../../consts/statusCodes";

export const createTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { test, questions } = req.body;
    const data = await AdminService.createTest(test, questions);

    res.json({
      status: CREATED,
      message: "Test created!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
