import express from "express";
import authRoutes from "./v1/authRoutes.ts";
import userRoutes from "./v1/userRoutes.ts";

const router = express.Router();

router.use("/v1/auth", authRoutes);
router.use("/v1/user", userRoutes); // Example for user-related routes

export default router;
