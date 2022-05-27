import { PaginateOptions } from "mongoose";
import { AdminModel } from "../../database/models";

export const getAdmins = async (page: any, limit: any) => {
  const options: PaginateOptions = {
    sort: { createdAt: -1 },
    page,
    limit,
    select: { password: 0, updatedAt: 0, __v: 0 },
  };
  const admins = await AdminModel.paginate({}, options);
  return admins;
};
