import { AdminService } from "../../services";
import { Response, NextFunction } from "express";
import { IParamsIdReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const deleteTest = async (
  req: IParamsIdReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Id } = req.params;
    const data = await AdminService.deleteTest(Id);
    res.json({
      status: OK,
      message: "Test deleted!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
