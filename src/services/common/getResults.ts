import { ResultModel } from "../../database/models";
import { ApiError } from "../../errors/error.custom";
import { Types } from "mongoose";

export const getResults = async (studentId: Types.ObjectId) => {
  try {
    const data = await ResultModel.find({ student_Id: studentId });
    return data;
  } catch (err) {
    throw ApiError.BadRequest("Group service error!");
  }
};
