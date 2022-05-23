import { Router } from "express";
import { TestCTRL } from "../controllers";
import { auth } from "../middlewares/auth";
const router = Router();

router.get("/list", auth, TestCTRL.getTests);

router.get("/start/:testId", auth, TestCTRL.startTest);

router.post("/end", auth, TestCTRL.endTest);

export default router;
