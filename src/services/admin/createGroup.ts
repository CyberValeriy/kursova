import { GroupModel } from "../../database/models";

export const createGroup = async (title: string) => {
  const created = await GroupModel.create({ title });
  return created;
};
