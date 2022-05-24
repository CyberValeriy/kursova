import { Request } from "express";
import { IAdmin, IStudent } from "../database/models/interfaces";
import { Types } from "mongoose";

export interface IAuth extends Request {
  student: IStudent;
  studentId: Types.ObjectId;
}

export interface IAuthAdmin extends Request {
  admin: IAdmin;
  admintId: Types.ObjectId;
  super: boolean;
}
