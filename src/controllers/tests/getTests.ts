import { Response, NextFunction } from "express";
import { TestService } from "../../services";
import { IAuth } from "../../interfaces";
import { OK } from "../../consts/statusCodes";

export const getTests = async (
  req: IAuth,
  res: Response,
  next: NextFunction
) => {
  try {
    const { student } = req;
    const data = await TestService.get(student);

    res.json({
      status: OK,
      message: "Tests fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
