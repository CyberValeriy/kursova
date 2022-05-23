"use strict";
exports.__esModule = true;
exports.ResultModel = void 0;
var mongoose_1 = require("mongoose");
var resultSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    student_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Student" }
});
exports.ResultModel = (0, mongoose_1.model)("Result", resultSchema);
