"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
var errors_1 = require("./errors");
var routes_1 = __importDefault(require("./routes"));
var config_1 = __importDefault(require("./config"));
var cron_1 = __importDefault(require("./utils/cron"));
var cors_1 = __importDefault(require("cors"));
var APP = (0, express_1["default"])();
APP.use((0, cors_1["default"])());
APP.use(express_1["default"].json());
APP.use("/api", routes_1["default"]);
APP.use(errors_1.ErrorHandler);
(0, database_1.connectDatabase)();
(0, cron_1["default"])();
var SERVER = APP.listen(config_1["default"].PORT, function () {
    console.log("Server launched...");
    console.log("Worker PID:", process.pid);
});
process.on("SIGTERM", function () {
    SERVER.close(function () {
        process.exit(0);
    });
});
process.on("SIGINT", function () {
    SERVER.close(function () {
        process.exit(0);
    });
});
