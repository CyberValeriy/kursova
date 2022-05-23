"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var auth_valid_1 = __importDefault(require("../validators/auth.valid"));
var validHandler_1 = require("../middlewares/validHandler");
var router = (0, express_1.Router)();
router.post("/signup", auth_valid_1["default"].signup, validHandler_1.validHandler, controllers_1.AuthCTRL.signup);
router.post("/login", auth_valid_1["default"].login, validHandler_1.validHandler, controllers_1.AuthCTRL.login);
exports["default"] = router;
