import { Request, Response, NextFunction } from "express";
import { CommonService } from "../../services";
import { OK } from "../../consts/statusCodes";

export const groups = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await CommonService.getGroups();

    res.json({
      status: OK,
      message: "Groups fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
