import { Router } from "express";
import AuthRouter from "./auth.router";
import CommonRouter from "./common.router";
import TestRouter from "./test.router";
import AdminRouter from "./admin.router";

const apiRouter = Router();

apiRouter.use("/auth", AuthRouter);
apiRouter.use("/test", TestRouter);
apiRouter.use("/admin", AdminRouter);
apiRouter.use("/common", CommonRouter);

export default apiRouter;
