export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export interface UserProfileResponse {
  status: "OK" | "error";
  user?: {
    id: string;
    name: string;
    email: string;
  };
  error?: string;
}
