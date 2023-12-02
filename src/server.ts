import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./utils/dbConnect";
import TRoute from "./routes/TrackRoutes";
import Courier from "./routes/courier";

dotenv.config();

const PORT = process.env.PORT || 1957;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tracking", TRoute);
app.use("/courier", Courier);

app.use("*", (req: Request, res: Response) => {
  res.json({ msg: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Fire the server on port ${PORT} `);
  connectDb();
});
