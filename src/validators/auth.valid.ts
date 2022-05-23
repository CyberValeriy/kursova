import { body } from "express-validator";
import { StudentModel } from "../database/models";

export default {
  signup: [
    body("groupId")
      .notEmpty()
      .isString()
      .isMongoId()
      .withMessage("Not a mongoId!"),
    body("username")
      .notEmpty()
      .isString()
      .isLength({ max: 20 })
      .withMessage("Length must be up to 20 symbols!"),
    body("email")
      .notEmpty()
      .isString()
      .toLowerCase()
      .isEmail()
      .custom(async (email) => {
        if (await StudentModel.exists({ email })) {
          return Promise.reject("Email already in use!");
        }
      }),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must contain 6 symbols!"),
  ],

  login: [
    body("email")
      .notEmpty()
      .isString()
      .toLowerCase()
      .isEmail()
      .custom(async (email) => {
        if (!(await StudentModel.exists({ email }))) {
          return Promise.reject("User with this email not exist!");
        }
      }),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must contain 6 symbols!"),
  ],
};
