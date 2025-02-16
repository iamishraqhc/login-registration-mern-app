import type { Response } from "express";
import { getUserById, updateUser } from "../services/userServices.ts"; // Fixed typo in import (userService instead of userServices)
import type { UserProfileResponse } from "../types/userTypes.ts";
import type { AuthRequest } from "../middleware/authMiddleware.ts"; // Import custom request type

export const getUserProfile = async (req: AuthRequest, res: Response<UserProfileResponse>) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: "error", error: "Unauthorized access" });
    }

    const userId = req.user.id;
    const user = await getUserById(userId);
    if (!user) return res.status(404).json({ status: "error", error: "User not found" });

    res.json({ status: "OK", user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ status: "error", error: (err as Error).message });
  }
};

export const updateUserProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: "error", error: "Unauthorized access" });
    }

    const userId = req.user.id;
    const updatedUser = await updateUser(userId, req.body);
    res.json({ status: "OK", user: updatedUser });
  } catch (err) {
    res.status(400).json({ status: "error", error: (err as Error).message });
  }
};
