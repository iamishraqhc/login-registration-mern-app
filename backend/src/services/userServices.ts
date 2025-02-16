import type { UpdateUserRequest } from "../types/userTypes.ts";
import User from "../models/User.ts";

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (id: string, userData: UpdateUserRequest) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
