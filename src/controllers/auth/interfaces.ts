import { Request } from "express";
import { Types } from "mongoose";

export interface ISignupReq extends Request {
  body: {
    username: string;
    email: string;
    password: string;
    groupId: Types.ObjectId;
  };
}

export interface ILoginpReq extends Request {
  body: {
    email: string;
    password: string;
  };
}
