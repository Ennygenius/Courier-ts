"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CourierSchema = new mongoose_1.default.Schema({
    TrackingId: {
        type: String,
        required: true,
    },
    USPS: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
const Courier = mongoose_1.default.model("Courier", CourierSchema);
exports.default = Courier;
