import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { OK } from "../../consts/statusCodes";

export const getTests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { limit = 12, page = 1 } = req.query;
    const data = await AdminService.getTests(page, limit);
    res.json({
      status: OK,
      message: "Tests fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
