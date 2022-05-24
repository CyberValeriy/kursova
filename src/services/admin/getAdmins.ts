import { PaginateOptions } from "mongoose";
import { AdminModel } from "../../database/models";

export const getAdmins = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
  };
  const admins = await AdminModel.paginate({}, options);
  return admins;
};
