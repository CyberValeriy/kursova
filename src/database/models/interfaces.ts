import { Document } from "mongoose";
import { Types } from "mongoose";

export interface IStudent extends Document {
  username: string;
  email: string;
  password: string;
  group_id: Types.ObjectId;
  tests: Array<Types.ObjectId>;
}

export interface IGroup extends Document {
  title: string;
}

export interface ITest extends Document {
  title: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  group_id: Types.ObjectId;
}

export interface IChoice extends Document {
  value: string;
  correct: boolean;
}

export interface IQuestion extends Document {
  test_id: Types.ObjectId | null;
  title: String;
  choices: Array<IChoice>;
}

export interface IResult extends Document {
  title: String;
  points: String;
  user_id: Types.ObjectId;
}
