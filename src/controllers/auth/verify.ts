import { Response, NextFunction } from "express";
import sendEmail from "../../utils/email";
import { IVerifyReq } from "./interfaces";
import { OK } from "../../consts/statusCodes";

export const verify = async (
  req: IVerifyReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    await sendEmail(email);

    res.json({
      status: OK,
      message: "Email sended!",
    });
  } catch (err) {
    next(err);
  }
};
