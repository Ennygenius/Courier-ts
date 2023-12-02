import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.URI_PRODUCTION as string;

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(URI);
    console.log(`${connect.connection.name} Database connected`);
  } catch (error) {
    console.log("An Error Occured", error);
  }
};
