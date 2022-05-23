"use strict";
exports.__esModule = true;
exports.TestModel = void 0;
var mongoose_1 = require("mongoose");
var testSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    group_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Group", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true }
});
exports.TestModel = (0, mongoose_1.model)("Test", testSchema);
