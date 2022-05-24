"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TestModel = void 0;
var mongoose_1 = require("mongoose");
var mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
var testSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    group_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Group", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true }
}, {
    timestamps: true
});
testSchema.plugin(mongoose_paginate_v2_1["default"]);
exports.TestModel = (0, mongoose_1.model)("Test", testSchema);
