"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Courier_1 = require("../controllers/Courier");
const router = (0, express_1.default)();
router
    .get("/", Courier_1.getAllCourier)
    .post("/", Courier_1.createCourier)
    .delete("/:id", Courier_1.deleteCourier);
exports.default = router;
