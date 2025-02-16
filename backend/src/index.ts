import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
