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
exports.deleteTrackInfo = exports.updateTrackIfo = exports.getTrackInfo = exports.createTrackInfo = exports.fetchTrackInfo = void 0;
const TrackingInfo_1 = __importDefault(require("../models/TrackingInfo"));
const fetchTrackInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const track = yield TrackingInfo_1.default.find({});
    res.json({ track: track });
});
exports.fetchTrackInfo = fetchTrackInfo;
const createTrackInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courier, trackingStatus, from, to, seviceMode, weight, goodsDetails, address, deliveryDate, recieverName, recieverNumber, } = req.body;
    try {
        const info = TrackingInfo_1.default.create({
            courier,
            trackingStatus,
            from,
            to,
            seviceMode,
            weight,
            goodsDetails,
            address,
            deliveryDate,
            recieverName,
            recieverNumber,
        });
        if (!info) {
            return res.json({ message: "please the fields are required" });
        }
        res.json({ info });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTrackInfo = createTrackInfo;
const getTrackInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    try {
        const info = yield (TrackingInfo_1.default === null || TrackingInfo_1.default === void 0 ? void 0 : TrackingInfo_1.default.findById(id));
        res.json({ info });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTrackInfo = getTrackInfo;
const updateTrackIfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const { courier, trackingStatus, from, to, seviceMode, weight, goodsDetails, address, deliveryDate, recieverName, recieverNumber, } = req.body;
    try {
        const info = yield (TrackingInfo_1.default === null || TrackingInfo_1.default === void 0 ? void 0 : TrackingInfo_1.default.findByIdAndUpdate(id, {
            courier,
            trackingStatus,
            from,
            to,
            seviceMode,
            weight,
            goodsDetails,
            address,
            deliveryDate,
            recieverName,
            recieverNumber,
        }));
        res.json({ Msg: `info with the Id of ${id} updated successfully` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTrackIfo = updateTrackIfo;
const deleteTrackInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    try {
        const info = yield TrackingInfo_1.default.findByIdAndDelete(id);
        res.json({ msg: `A Tracking info with the id of ${id} has been deleted` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTrackInfo = deleteTrackInfo;
