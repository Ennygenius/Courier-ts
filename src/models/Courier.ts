import mongoose from "mongoose";

interface ICourier {
  TrackingId: string;
  USPS: string;
  firstName: string;
  lastName: string;
  email: string;
}

const CourierSchema = new mongoose.Schema<ICourier>({
  TrackingId: {
    type: String,
    required: true,
  },
  USPS: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Courier = mongoose.model("Courier", CourierSchema);

export default Courier;
