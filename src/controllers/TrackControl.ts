import TrackInfo from "../models/TrackingInfo";
import { Request, Response } from "express";

export const fetchTrackInfo = async (req: Request, res: Response) => {
  const track = await TrackInfo.find({});
  res.json({ track: track });
};

export const createTrackInfo = async (req: Request, res: Response) => {
  const {
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
  } = req.body;

  try {
    const info = TrackInfo.create({
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
  } catch (error) {
    console.log(error);
  }
};

export const getTrackInfo = async (req: Request, res: Response) => {
  const { id } = req?.params;
  try {
    const info = await TrackInfo?.findById(id);
    res.json({ info });
  } catch (error) {
    console.log(error);
  }
};

export const updateTrackIfo = async (req: Request, res: Response) => {
  const { id } = req?.params;

  const {
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
  } = req.body;
  try {
    const info = await TrackInfo?.findByIdAndUpdate(id, {
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

    res.json({ Msg: `info with the Id of ${id} updated successfully` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrackInfo = async (req: Request, res: Response) => {
  const { id } = req?.params;
  try {
    const info = await TrackInfo.findByIdAndDelete(id);
    res.json({ msg: `A Tracking info with the id of ${id} has been deleted` });
  } catch (error) {
    console.log(error);
  }
};
