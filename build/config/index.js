"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var env = process.env;
exports["default"] = {
    mongoConnection: env.MONGO_CONNECTION,
    PORT: 8080,
    JWT: { SECRET: env.JWT_SECRET, EXPIRES: "1d" }
};
