"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TrackControl_1 = require("../controllers/TrackControl");
const ValidateTID_1 = require("../controllers/ValidateTID");
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.default)();
router
    .get("/", middleware_1.Auth, TrackControl_1.fetchTrackInfo)
    .post("/", TrackControl_1.createTrackInfo)
    .patch("/:id", TrackControl_1.updateTrackIfo)
    .delete("/:id", TrackControl_1.deleteTrackInfo)
    .post("/login", ValidateTID_1.ValidateTID)
    .get("/user", middleware_1.Auth, ValidateTID_1.getSingleCourier);
exports.default = router;
