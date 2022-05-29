import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { OK } from "../../consts/statusCodes";

export const getResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { limit = 12, page = 1 } = req.query;
    const data = await AdminService.getResults(page, limit);
    res.json({
      status: OK,
      message: "Results fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
