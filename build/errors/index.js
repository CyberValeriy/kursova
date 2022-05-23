"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.ErrorHandler = exports.ApiError = void 0;
var error_custom_1 = require("./error.custom");
__createBinding(exports, error_custom_1, "ApiError");
var error_handler_1 = require("./error.handler");
__createBinding(exports, error_handler_1, "ErrorHandler");
