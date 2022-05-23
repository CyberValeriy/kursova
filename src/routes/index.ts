import { Router } from "express";
import AuthRouter from "./auth.router";
import CommonRouter from "./common.router";
import TestRouter from "./test.router";

const apiRouter = Router();

apiRouter.use("/auth", AuthRouter);
apiRouter.use("/common", CommonRouter);
apiRouter.use("/test", TestRouter);

export default apiRouter;
