import { Response, NextFunction } from "express";
import { AuthService } from "../../services";
import { ISignupReq } from "./interfaces";
import { CREATED } from "../../consts/statusCodes";

export const signup = async (
  req: ISignupReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, password, groupId } = req.body;

    const data = await AuthService.signup(email, username, password, groupId);

    res.json({
      status: CREATED,
      message: "Student created!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
