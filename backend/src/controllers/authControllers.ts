import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authServices";
import { RegisterSchema, LoginSchema } from "../schemas/authSchema";
import { RegisterRequest, LoginRequest, LoginResponse } from "../types/authTypes";

export const register = async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
  try {
    const parsedBody = RegisterSchema.parse(req.body);
    const response = await registerUser(parsedBody.name, parsedBody.email, parsedBody.password);
    res.json(response);
  } catch (err) {
    res.status(400).json({ status: "error", error: (err as Error).message });
  }
};

export const login = async (req: Request<{}, {}, LoginRequest>, res: Response<LoginResponse>) => {
  try {
    const parsedBody = LoginSchema.parse(req.body);
    const response = await loginUser(parsedBody.email, parsedBody.password);
    res.json(response);
  } catch (err) {
    res.status(400).json({ status: "error", error: (err as Error).message });
  }
};
