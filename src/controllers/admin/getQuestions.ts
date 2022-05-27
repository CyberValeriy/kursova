import { AdminService } from "../../services";
import { Response, NextFunction } from "express";
import { IParamsIdReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const getQuestions = async (
  req: IParamsIdReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Id } = req.params;
    const data = await AdminService.getQuestions(Id);
    res.json({
      status: OK,
      message: "Questions fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
