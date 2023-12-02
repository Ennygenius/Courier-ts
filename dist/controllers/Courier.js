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
exports.deleteCourier = exports.createCourier = exports.getAllCourier = void 0;
const Courier_1 = __importDefault(require("../models/Courier"));
const getAllCourier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courier = yield Courier_1.default.find({});
        res.json({ courier });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllCourier = getAllCourier;
const createCourier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { TrackingId, USPS, firstName, lastName, email } = req.body;
    const TFind = yield Courier_1.default.findOne({ TrackingId });
    if (TFind) {
        res.json({ errMsg: "That Tracking id already exists" });
    }
    else {
        const courier = new Courier_1.default({
            TrackingId,
            USPS,
            firstName,
            lastName,
            email,
        });
        try {
            const saveCourier = yield courier.save();
            res.json({ courier: saveCourier });
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.createCourier = createCourier;
const deleteCourier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const courier = yield Courier_1.default.findByIdAndDelete(id);
    try {
        if (!courier) {
            res.json({ msg: `no id found of ${req.params.id} found` });
        }
        res.json({ courier });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteCourier = deleteCourier;
