"use strict";
exports.__esModule = true;
exports.QuestionModel = void 0;
var mongoose_1 = require("mongoose");
var choiceSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
    correct: { type: Boolean, "default": true }
});
var questionSchema = new mongoose_1.Schema({
    test_id: { type: mongoose_1.SchemaTypes.ObjectId, ref: "Test", required: true },
    title: { type: String, required: true },
    choises: [choiceSchema]
});
exports.QuestionModel = (0, mongoose_1.model)("Question", questionSchema);
