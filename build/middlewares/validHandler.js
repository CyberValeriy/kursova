"use strict";
exports.__esModule = true;
exports.validHandler = void 0;
var express_validator_1 = require("express-validator");
var statusCodes_1 = require("../consts/statusCodes");
var validHandler = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({
            status: statusCodes_1.VALIDATION,
            message: "Validation error!",
            error: errors.array()[0]
        });
    }
    next();
};
exports.validHandler = validHandler;
