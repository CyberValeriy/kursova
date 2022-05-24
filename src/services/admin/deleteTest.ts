import { Types } from "mongoose";
import { TestModel } from "../../database/models";
import { ApiError } from "../../errors";

export const deleteTest = async (testId: Types.ObjectId) => {
  if (await TestModel.exists({ _id: testId })) {
    throw ApiError.BadRequest("Test with such id not exist!");
  }
  const test = await TestModel.findOneAndDelete({ _id: testId });
  return test;
};
