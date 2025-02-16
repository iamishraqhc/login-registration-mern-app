import { Request, Response } from "express";
import { getUserById, updateUser } from "../services/userServices";
import { UpdateUserRequest, UserProfileResponse } from "../types/userTypes";

export const getUserProfile = async (req: Request, res: Response<UserProfileResponse>) => {
  try {
    const userId = req.user?.id;
    const user = await getUserById(userId);
    if (!user) return res.status(404).json({ status: "error", error: "User not found" });

    res.json({ status: "OK", user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ status: "error", error: (err as Error).message });
  }
};

export const updateUserProfile = async (req: Request<{}, {}, UpdateUserRequest>, res: Response) => {
  try {
    const userId = req.user?.id;
    const updatedUser = await updateUser(userId, req.body);
    res.json({ status: "OK", user: updatedUser });
  } catch (err) {
    res.status(400).json({ status: "error", error: (err as Error).message });
  }
};
