import { Router } from "express";
import { AdminCTRL } from "../controllers";
import AdminValid from "../validators/admin.valid";
import { validHandler } from "../middlewares/validHandler";
import { authAdmin } from "../middlewares/auth";
import { isSuper } from "../middlewares/isSuper";
const router = Router();

//AUTH
router.post("/login", AdminValid.login, validHandler, AdminCTRL.login);

//STUDENTS
router.delete(
  "/student/:Id",
  authAdmin,
  AdminValid.deleteStudent,
  validHandler,
  AdminCTRL.deleteStudent
);

router.get("/students", authAdmin, AdminCTRL.getStudents);

//TESTS
router.post(
  "/test",
  authAdmin,
  AdminValid.createTest,
  validHandler,
  AdminCTRL.createTest
);

router.get("/tests", authAdmin, AdminCTRL.getTests);

router.get(
  "/questions/:Id",
  authAdmin,
  AdminValid.getQuestions,
  validHandler,
  AdminCTRL.getQuestions
);

router.delete(
  "/test/:Id",
  authAdmin,
  AdminValid.deleteTest,
  validHandler,
  AdminCTRL.deleteTest
);

//SUPER
router.post(
  "/",
  authAdmin,
  isSuper,
  AdminValid.createAdmin,
  validHandler,
  AdminCTRL.createAdmin
);

router.delete(
  "/:Id",
  authAdmin,
  isSuper,
  AdminValid.deleteAdmin,
  validHandler,
  AdminCTRL.deleteAdmin
);

router.get("/", authAdmin, isSuper, AdminCTRL.getAdmins);

export default router;
