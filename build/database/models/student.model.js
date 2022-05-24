"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StudentModel = void 0;
var mongoose_1 = require("mongoose");
var mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
var studentSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    group_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Group" },
    tests: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: "Test" }]
}, {
    timestamps: true
});
studentSchema.plugin(mongoose_paginate_v2_1["default"]);
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
