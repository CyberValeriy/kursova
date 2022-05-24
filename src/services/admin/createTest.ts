import { TestModel, QuestionModel } from "../../database/models";
import { IQuestion, ITest } from "../../database/models/interfaces";

export const createTest = async (test: ITest, questions: Array<IQuestion>) => {
  const testDoc = await TestModel.create(test);

  for (let el of questions) {
    el.test_id = testDoc._id;
  }
  await QuestionModel.insertMany(questions);
  return testDoc;
};
