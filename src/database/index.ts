import mongoose from "mongoose";
import CONFIG from "../config";

export const connectDatabase = () => {
  mongoose
    .connect(CONFIG.mongoConnection)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Error connection to database:", err);
    });
};
