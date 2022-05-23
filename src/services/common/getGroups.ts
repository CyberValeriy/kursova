import { GroupModel } from "../../database/models";
import { ApiError } from "../../errors/error.custom";

export const getGroups = async () => {
  try {
    const data = await GroupModel.find();
    return data;
  } catch (err) {
    throw ApiError.BadRequest("Group service error!");
  }
};
