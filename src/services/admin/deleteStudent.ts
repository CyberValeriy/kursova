import { Types } from "mongoose";
import { StudentModel } from "../../database/models";
import { ApiError } from "../../errors";

export const deleteStudent = async (studentId: Types.ObjectId) => {
  if (await StudentModel.exists({ _id: studentId })) {
    throw ApiError.BadRequest("Student with such id not exist!");
  }
  const student = await StudentModel.findOneAndDelete({ _id: studentId });
  return student;
};
