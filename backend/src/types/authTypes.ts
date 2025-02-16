export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    status: "OK" | "error";
    user?: string; // JWT token
    expiresIn?: string;
    error?: string;
  }
  