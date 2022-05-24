import { Request, Response, NextFunction } from "express";
import { AdminService } from "../../services";
import { CREATED } from "../../consts/statusCodes";

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, password, groupId } = req.body;

    const data = await AdminService.createAdmin(email, username);

    res.json({
      status: CREATED,
      message: "Admin created!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
