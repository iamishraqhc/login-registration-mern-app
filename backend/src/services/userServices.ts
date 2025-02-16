import User from "../models/User";
import { UpdateUserRequest } from "../types/userTypes";

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (id: string, userData: UpdateUserRequest) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};
