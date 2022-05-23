"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var auth_router_1 = __importDefault(require("./auth.router"));
var common_router_1 = __importDefault(require("./common.router"));
var apiRouter = (0, express_1.Router)();
apiRouter.use("/auth", auth_router_1["default"]);
apiRouter.use("/common", common_router_1["default"]);
exports["default"] = apiRouter;
