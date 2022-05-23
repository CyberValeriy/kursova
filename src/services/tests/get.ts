import { TestModel } from "../../database/models";
import { IStudent } from "../../database/models/interfaces";
import { ApiError } from "../../errors";

export const get = async (student: IStudent) => {
  try {
    const data = await TestModel.find({
      group_id: student.group_id,
      startDate: { $lte: new Date() },
      endDate: { $gte: new Date() },
      _id: { $nin: student.tests },
    });

    return data;
  } catch (err) {
    throw ApiError.BadRequest("Get tests service errror!");
  }
};
