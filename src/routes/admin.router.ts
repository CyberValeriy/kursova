import { Router } from "express";
import { AdminCTRL } from "../controllers";
import AuthValid from "../validators/auth.valid";
import { validHandler } from "../middlewares/validHandler";
import { authAdmin } from "../middlewares/auth";
import { isSuper } from "../middlewares/isSuper";
const router = Router();

//AUTH
router.post("/login", AuthValid.login, validHandler, AdminCTRL.login);

//STUDENTS
router.delete("student/:studentId", authAdmin, AdminCTRL.deleteStudent);

router.get("/students", authAdmin, AdminCTRL.getStudents);

//TESTS
router.post("/test", authAdmin, AdminCTRL.createTest);

router.get("/tests", authAdmin, AdminCTRL.getTests);

router.get("/questions/:testId", authAdmin, AdminCTRL.getQuestions);

router.delete("test/:testId", authAdmin, AdminCTRL.deleteTest);

//SUPER
router.post("/", authAdmin, isSuper, AdminCTRL.getAdmins);

router.delete("/:adminId", authAdmin, isSuper, AdminCTRL.deleteAdmin);

router.get("/", authAdmin, isSuper, AdminCTRL.createAdmin);

export default router;
