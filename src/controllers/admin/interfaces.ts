import { Request } from "express";

export interface IParamsIdReq extends Request {
  params: {
    Id: any;
  };
}
