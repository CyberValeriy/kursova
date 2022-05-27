import { Request, Response, NextFunction } from "express";
import { AdminService } from "../../services";
import { CREATED } from "../../consts/statusCodes";

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, isSuper = false } = req.body;

    const data = await AdminService.createAdmin(email, password, isSuper);

    res.json({
      status: CREATED,
      message: "Admin created!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
