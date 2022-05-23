"use strict";
exports.__esModule = true;
exports.GroupModel = void 0;
var mongoose_1 = require("mongoose");
var groupSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true }
});
exports.GroupModel = (0, mongoose_1.model)("Group", groupSchema);
