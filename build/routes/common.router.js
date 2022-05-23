"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var auth_1 = require("../middlewares/auth");
var router = (0, express_1.Router)();
router.get("/groups", controllers_1.CommonCTRL.groups);
router.get("/results", auth_1.auth, controllers_1.CommonCTRL.results);
exports["default"] = router;
