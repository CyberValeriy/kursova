import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  mongoConnection: env.MONGO_CONNECTION,
  PORT: 8080,
  JWT: { SECRET: env.JWT_SECRET, EXPIRES: "1d" },
  GOOGLE: {
    USER: env.GOOGLE_USER,
    PASS: env.GOOGLE_PASS,
  },
};
