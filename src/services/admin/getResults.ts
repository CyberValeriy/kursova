import { PaginateOptions } from "mongoose";
import { ResultModel } from "../../database/models";

export const getResults = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
  };
  const students = await ResultModel.paginate({}, options);
  return students;
};
