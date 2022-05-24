import { Schema, model, SchemaTypes } from "mongoose";
import { IQuestion } from "./interfaces";

const choiceSchema = new Schema({
  value: { type: String, required: true },
  correct: { type: Boolean, default: true },
});

const questionSchema = new Schema({
  test_id: { type: SchemaTypes.ObjectId, ref: "Test", required: true },
  title: { type: String, required: true },
  choices: [choiceSchema],
});

export const QuestionModel = model<IQuestion>("Question", questionSchema);
