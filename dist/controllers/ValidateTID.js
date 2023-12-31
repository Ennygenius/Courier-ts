"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleCourier = exports.ValidateTID = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Courier_1 = __importDefault(require("../models/Courier"));
const ValidateTID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { TrackingId } = req.body;
    if (!TrackingId) {
        return res.json({ ErrMsg: "Please the field cant be empty" });
    }
    const courier = yield Courier_1.default.findOne({ TrackingId });
    if (!courier) {
        return res.json({
            ErrMsg: "Wrong Tracking Id inputed please check and try again",
        });
    }
    const payload = { courier };
    const token = jsonwebtoken_1.default.sign(payload, process.env.secret, {
        expiresIn: "5s",
    });
    if (courier) {
        return res.json({
            TrackingId,
            token,
        });
    }
});
exports.ValidateTID = ValidateTID;
const getSingleCourier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.courier;
        return res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ ErrMsg: "Server Error" });
    }
});
exports.getSingleCourier = getSingleCourier;
