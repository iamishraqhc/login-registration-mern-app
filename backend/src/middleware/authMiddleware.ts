import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config.ts";

export interface AuthRequest extends Request {
  user?: { id: string; name: string; email: string };
}

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ status: "error", error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret as string) as { id: string; name: string; email: string };
    req.user = decoded;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ status: "error", error: "Token has expired." });
    }
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ status: "error", error: "Invalid token format." });
    }
    res.status(400).json({ status: "error", error: "Token verification failed." });
  }
};
