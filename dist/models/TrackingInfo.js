"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TInfo = new mongoose_1.default.Schema({
    courier: [
        {
            type: mongoose_1.default.Schema.ObjectId,
            ref: "Courier",
        },
    ],
    goodsImage: {
        type: String,
        default: "",
    },
    trackingStatus: {
        type: String,
        enum: {
            values: ["HOLD", "PENDING", "DELIVERED"],
            message: "{VALUE} is not supported",
        },
        default: "PENDING",
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    seviceMode: {
        type: String,
        enum: {
            values: ["AIR", "SHIP", "LAND"],
            message: "{VALUE} is not supported",
        },
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    goodsDetails: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    deliveryDate: {
        type: Date,
        default: Date.now(),
    },
    recieverName: {
        type: String,
        required: true,
    },
    recieverNumber: {
        type: Number,
        required: true,
    },
});
const TrackInfo = mongoose_1.default.model("TInfo", TInfo);
exports.default = TrackInfo;
