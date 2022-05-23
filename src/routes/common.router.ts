import { Router } from "express";
import { CommonCTRL } from "../controllers";
import { auth } from "../middlewares/auth";
const router = Router();

router.get("/groups", CommonCTRL.groups);

router.get("/results", auth, CommonCTRL.results);

export default router;
