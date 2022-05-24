import { Types } from "mongoose";
import { QuestionModel } from "../../database/models";

export const getQuestions = async (testId: Types.ObjectId) => {
  const questions = await QuestionModel.find({ test_id: testId });
  return questions;
};
