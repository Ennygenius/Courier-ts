import express, { Request, Response } from "express";
import {
  createTrackInfo,
  deleteTrackInfo,
  fetchTrackInfo,
  updateTrackIfo,
} from "../controllers/TrackControl";
import { ValidateTID, getSingleCourier } from "../controllers/ValidateTID";
import { Auth } from "../middleware/middleware";

const router = express();

router
  .get("/", Auth, fetchTrackInfo)
  .post("/", createTrackInfo)
  .patch("/:id", updateTrackIfo)
  .delete("/:id", deleteTrackInfo)
  .post("/login", ValidateTID)
  .get("/user", Auth, getSingleCourier);

export default router;
