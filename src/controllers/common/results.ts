import { Response, NextFunction } from "express";
import { CommonService } from "../../services";
import { IAuth } from "../../interfaces";
import { OK } from "../../consts/statusCodes";

export const results = async (
  req: IAuth,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req;
    const resutls = await CommonService.getResults(studentId);
    res.json({
      status: OK,
      message: "Groups fetched!",
      data: resutls,
    });
  } catch (err) {
    next(err);
  }
};
