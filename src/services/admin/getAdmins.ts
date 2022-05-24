import { PaginateOptions } from "mongoose";
import { AdminModel } from "../../database/models";

export const getTests = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
  };
  const tests = await AdminModel.paginate({}, options);
  return tests;
};
