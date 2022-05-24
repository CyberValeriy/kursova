import { AdminService } from "../../services";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { OK } from "../../consts/statusCodes";

export const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const data = await AdminService.deleteStudent(
      new Types.ObjectId(studentId)
    );
    res.json({
      status: OK,
      message: "Student deleted!",
      data,
    });
  } catch (err) {
    next(err);
  }
};
