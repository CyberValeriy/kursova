import express, { Application } from "express";
import { connectDatabase } from "./database";
import { ErrorHandler } from "./errors";
import apiRouter from "./routes";
import CONFIG from "./config";
import runCron from "./utils/cron";
import cors from "cors";
const APP: Application = express();

APP.use(cors());
APP.use(express.json());

APP.use("/api", apiRouter);
APP.use(ErrorHandler);

connectDatabase();
runCron();

const SERVER = APP.listen(CONFIG.PORT, () => {
  console.log("Server launched...");
  console.log("Worker PID:", process.pid);
});

process.on("SIGTERM", () => {
  SERVER.close(() => {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  SERVER.close(() => {
    process.exit(0);
  });
});
