import { TestModel, QuestionModel } from "../../database/models";
import { Types } from "mongoose";
import { ApiError } from "../../errors";

export const start = async (testId: Types.ObjectId) => {
  try {
    if (!(await TestModel.exists({ _id: testId }))) {
      throw ApiError.BadRequest("Test not exist!");
    }
    const data = await QuestionModel.find({ test_id: testId });

    return data;
  } catch (err) {
    throw ApiError.BadRequest("Start test service errror!");
  }
};
