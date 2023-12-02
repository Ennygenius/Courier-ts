"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConnect_1 = require("./utils/dbConnect");
const TrackRoutes_1 = __importDefault(require("./routes/TrackRoutes"));
const courier_1 = __importDefault(require("./routes/courier"));
dotenv_1.default.config();
const PORT = process.env.PORT || 1957;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/tracking", TrackRoutes_1.default);
app.use("/courier", courier_1.default);
app.use("*", (req, res) => {
    res.json({ msg: "Route not found" });
});
app.listen(PORT, () => {
    console.log(`Fire the server on port ${PORT} `);
    (0, dbConnect_1.connectDb)();
});
