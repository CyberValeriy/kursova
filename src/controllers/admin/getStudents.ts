import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { OK } from "../../consts/statusCodes";

export const getStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { limit = 12, page = 1 } = req.query;
    const data = await AdminService.getStudents(page, limit);
    res.json({
      status: OK,
      message: "Students fetched!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
