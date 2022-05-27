import { AdminService } from "../../services";
import { Response, NextFunction } from "express";
import { IParamsIdReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const deleteAdmin = async (
  req: IParamsIdReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Id } = req.params;
    const data = await AdminService.deleteAdmin(Id);
    res.json({
      status: OK,
      message: "Admin deleted!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
