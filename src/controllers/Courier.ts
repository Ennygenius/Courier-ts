import { Request, Response } from "express";
import Courier from "../models/Courier";

const getAllCourier = async (req: Request, res: Response) => {
  try {
    const courier = await Courier.find({});
    res.json({ courier });
  } catch (error) {
    console.log(error);
  }
};

const createCourier = async (req: Request, res: Response) => {
  const { TrackingId, USPS, firstName, lastName, email } = req.body;
  const TFind = await Courier.findOne({ TrackingId });
  if (TFind) {
    res.json({ errMsg: "That Tracking id already exists" });
  } else {
    const courier = new Courier({
      TrackingId,
      USPS,
      firstName,
      lastName,
      email,
    });
    try {
      const saveCourier = await courier.save();
      res.json({ courier: saveCourier });
    } catch (error) {
      console.log(error);
    }
  }
};

const deleteCourier = async (req: Request, res: Response) => {
  const { id } = req.params;
  const courier = await Courier.findByIdAndDelete(id);
  try {
    if (!courier) {
      res.json({ msg: `no id found of ${req.params.id} found` });
    }
    res.json({ courier });
  } catch (error) {
    console.log(error);
  }
};

export { getAllCourier, createCourier, deleteCourier };
