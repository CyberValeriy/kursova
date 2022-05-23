"use strict";
exports.__esModule = true;
exports.ErrorHandler = void 0;
var ErrorHandler = function (error, req, res, next) {
    console.log(error);
    res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || error,
        error: error.error || "Internal Server Error"
    });
};
exports.ErrorHandler = ErrorHandler;
