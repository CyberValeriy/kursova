import { body, param } from "express-validator";
import {
  AdminModel,
  StudentModel,
  TestModel,
  GroupModel,
} from "../database/models";
import { IQuestion } from "../database/models/interfaces";
import { Types } from "mongoose";

const toObjectId = (value: string) => {
  try {
    return new Types.ObjectId(value);
  } catch (err) {
    return Promise.reject("Invalid id!");
  }
};

export default {
  login: [
    body("email")
      .notEmpty()
      .isString()
      .toLowerCase()
      .isEmail()
      .custom(async (email) => {
        if (!(await AdminModel.exists({ email }))) {
          return Promise.reject("Admin not exist!");
        }
      }),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must contain 6 symbols!"),
  ],

  deleteStudent: [
    param("Id")
      .notEmpty()
      .isString()
      .isMongoId()
      .customSanitizer(toObjectId)
      .custom(async (studentId) => {
        if (!(await StudentModel.exists({ _id: studentId }))) {
          return Promise.reject("Student not exist!");
        }
      }),
  ],

  deleteAdmin: [
    param("Id")
      .notEmpty()
      .isString()
      .isMongoId()
      .customSanitizer(toObjectId)
      .custom(async (adminId) => {
        if (!(await AdminModel.exists({ _id: adminId }))) {
          return Promise.reject("Admin not exist!");
        }
      }),
  ],

  deleteTest: [
    param("Id")
      .notEmpty()
      .isString()
      .isMongoId()
      .customSanitizer(toObjectId)
      .custom(async (testId) => {
        if (!(await TestModel.exists({ _id: testId }))) {
          return Promise.reject("Test not exist!");
        }
      }),
  ],

  getQuestions: [
    param("Id")
      .notEmpty()
      .isString()
      .customSanitizer(toObjectId)
      .custom(async (testId) => {
        if (!(await TestModel.exists({ _id: testId }))) {
          return Promise.reject("Test not exist!");
        }
      }),
  ],

  createAdmin: [
    body("email")
      .notEmpty()
      .isString()
      .toLowerCase()
      .isEmail()
      .custom(async (email) => {
        if (await AdminModel.exists({ email })) {
          return Promise.reject("Email already in use!");
        }
      }),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must contain 6 symbols!"),
  ],

  createTest: [
    body("test").notEmpty().isObject(),
    body("test.duration").notEmpty().isInt(),
    body("test.startDate").notEmpty().isString(),
    body("test.endDate").notEmpty().isString(),
    body("test.group_id")
      .notEmpty()
      .isString()
      .isMongoId()
      .customSanitizer(toObjectId),

    body("questions")
      .isArray()
      .custom((questions: IQuestion[]) => {
        for (const el of questions) {
          if (!el.choices || !el.title || el.choices.length == 0) {
            return Promise.reject("Invalid questions structure!");
          }
          let status = false;
          for (const choice of el.choices) {
            if (choice.correct) {
              status = true;
            }
          }
          if (!status) {
            return Promise.reject(
              "Question must contain at least one correct answer!"
            );
          }
        }
        return true;
      }),
  ],

  createGroup: [
    body("title")
      .notEmpty()
      .isString()
      .custom(async (title) => {
        if (await GroupModel.exists({ title })) {
          return Promise.reject("Title already in use!");
        }
      }),
  ],
};
