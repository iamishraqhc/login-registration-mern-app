import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.ts";
import config from "../config.ts";
import type { LoginResponse } from "../types/authTypes.ts";
import { findUserByEmail } from "./userServices.ts";

export const registerUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  return { status: "OK" };
};

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const user = await findUserByEmail(email);
  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { status: "error", error: "Invalid credentials" };
  }

  const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, config.jwtSecret as string, {
    expiresIn: "1h",
  });

  return { status: "OK", user: token, expiresIn: "1h" };
};
