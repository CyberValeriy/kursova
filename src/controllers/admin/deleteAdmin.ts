import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { OK } from "../../consts/statusCodes";

export const deleteAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { adminId } = req.params;
    const data = await AdminService.deleteAdmin(new Types.ObjectId(adminId));
    res.json({
      status: OK,
      message: "Admin deleted!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
