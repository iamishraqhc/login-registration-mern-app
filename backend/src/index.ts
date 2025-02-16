import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config.ts";
import indexRoutes from "./routes/indexRoutes.ts";
import { setupSwagger } from "./swagger.ts";

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app); // Swagger setup

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", indexRoutes);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
