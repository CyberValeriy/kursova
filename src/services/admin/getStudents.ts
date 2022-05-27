import { PaginateOptions } from "mongoose";
import { StudentModel } from "../../database/models";

export const getStudents = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
    select: { tests: 0, password: 0, __v: 0, updatedAt: 0 },
    populate: "group_id",
  };
  const students = await StudentModel.paginate({}, options);
  return students;
};
