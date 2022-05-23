import { Schema, model } from "mongoose";
import { IGroup } from "./interfaces";

const groupSchema = new Schema({
  title: { type: String, required: true, unique: true },
});

export const GroupModel = model<IGroup>("Group", groupSchema);
