"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.connectDatabase = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../config"));
var connectDatabase = function () {
    mongoose_1["default"]
        .connect(config_1["default"].mongoConnection)
        .then(function () {
        console.log("Connected to database!");
    })["catch"](function (err) {
        console.log("Error connection to database:", err);
    });
};
exports.connectDatabase = connectDatabase;
