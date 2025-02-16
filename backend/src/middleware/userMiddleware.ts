import { Request, Response, NextFunction } from "express";
import { getUserById } from "../services/userServices";
import { AuthRequest } from "./authMiddleware";

export const validateUserExists = async (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ status: "error", error: "Unauthorized access" });
  }

  const user = await getUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ status: "error", error: "User not found" });
  }

  next();
};
