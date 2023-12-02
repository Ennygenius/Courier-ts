import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import Courier from "../models/Courier";
import { AuthRequest } from "../middleware/middleware";

export const ValidateTID = async (req: Request, res: Response) => {
  const { TrackingId } = req.body;

  if (!TrackingId) {
    return res.json({ ErrMsg: "Please the field cant be empty" });
  }

  const courier = await Courier.findOne({ TrackingId });

  if (!courier) {
    return res.json({
      ErrMsg: "Wrong Tracking Id inputed please check and try again",
    });
  }

  const payload = { courier };

  const token = jwt.sign(payload, process.env.secret as string, {
    expiresIn: "5s",
  });

  if (courier) {
    return res.json({
      TrackingId,
      token,
    });
  }
};

export const getSingleCourier = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.courier;
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ErrMsg: "Server Error" });
  }
};
