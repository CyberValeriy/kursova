import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { OK } from "../../consts/statusCodes";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const data = await AdminService.login(email, password);
    res.json({
      status: OK,
      message: "Admin logined!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
