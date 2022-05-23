import { Request } from "express";
import { IStudent } from "../database/models/interfaces";
import { Types } from "mongoose";

export interface IAuth extends Request {
  student: IStudent;
  studentId: Types.ObjectId;
}
