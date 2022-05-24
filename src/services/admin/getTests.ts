import { PaginateOptions } from "mongoose";
import { TestModel } from "../../database/models";

export const getTests = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
  };
  const tests = await TestModel.paginate({}, options);
  return tests;
};
