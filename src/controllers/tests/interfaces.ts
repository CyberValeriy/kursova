import { IAuth } from "../../interfaces";
import { Types } from "mongoose";

export interface IEndTestReq extends IAuth {
  points: number;
  test_id: Types.ObjectId;
}
