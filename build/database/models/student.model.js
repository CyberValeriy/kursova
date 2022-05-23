"use strict";
exports.__esModule = true;
exports.StudentModel = void 0;
var mongoose_1 = require("mongoose");
var studentSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    group_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Group" },
    tests: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: "Test" }]
});
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
