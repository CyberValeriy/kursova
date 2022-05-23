import { Response, NextFunction } from "express";
import { AuthService } from "../../services";
import { ISignupReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const login = async (
  req: ISignupReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const data = await AuthService.login(email, password);

    res.json({
      status: OK,
      message: "Student logined!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
