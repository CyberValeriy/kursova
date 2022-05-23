import { Router } from "express";
import { AuthCTRL } from "../controllers";
import AuthValid from "../validators/auth.valid";
import { validHandler } from "../middlewares/validHandler";
const router = Router();

router.post("/signup", AuthValid.signup, validHandler, AuthCTRL.signup);

router.post("/login", AuthValid.login, validHandler, AuthCTRL.login);

export default router;
