import { Router } from "express";
import AuthRouter from "./auth.router";
import CommonRouter from "./common.router";

const apiRouter = Router();

apiRouter.use("/auth", AuthRouter);
apiRouter.use("/common", CommonRouter);

export default apiRouter;
