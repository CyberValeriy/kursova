import { StudentModel, ResultModel, TestModel } from "../../database/models";
import { Types } from "mongoose";
import { ApiError } from "../../errors";

export const end = async (
  testId: Types.ObjectId,
  points: Number,
  studentId: Types.ObjectId
) => {
  try {
    await StudentModel.findByIdAndUpdate(studentId, {
      $push: { tests: testId },
    });
    const test = await TestModel.findById(testId);
    const result = await ResultModel.create({
      student_id: studentId,
      points,
      title: test.title,
    });
    return result;
  } catch (err) {
    throw ApiError.BadRequest("End test service errror!");
  }
};
