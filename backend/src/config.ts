import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/login-register-mern",
  jwtSecret: process.env.NODE_ENV === 'production' 
    ? process.env.JWT_SECRET as string
    : (process.env.JWT_SECRET as string || "default_secret"),
};
