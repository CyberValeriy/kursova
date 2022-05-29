import { Response, NextFunction } from "express";
import { AdminService } from "../../services";
import { ICreateGroupReq } from "./interfaces";
import { CREATED } from "../../consts/statusCodes";

export const createGroup = async (
  req: ICreateGroupReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    const data = await AdminService.createGroup(title);

    res.json({
      status: CREATED,
      message: "Group created!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
