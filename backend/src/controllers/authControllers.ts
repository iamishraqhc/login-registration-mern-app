import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authServices";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const response = await registerUser(name, email, password);
    res.json(response);
  } catch (err) {
    res.status(500).json({ status: "error", error: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const response = await loginUser(email, password);
    res.json(response);
  } catch (err) {
    res.status(500).json({ status: "error", error: (err as Error).message });
  }
};
