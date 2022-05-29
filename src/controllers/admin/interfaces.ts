import { Request } from "express";

export interface IParamsIdReq extends Request {
  params: {
    Id: any;
  };
}

export interface ICreateGroupReq extends Request {
  body: {
    title: string;
  };
}
