import { PaginateOptions } from "mongoose";
import { StudentModel } from "../../database/models";

export const getStudents = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
  };
  const students = await StudentModel.paginate({}, options);
  return students;
};
