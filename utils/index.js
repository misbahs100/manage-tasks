import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};
export default dbConnection;

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  // console.log(process.env.NODE_ENV)
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    // secure: process.env.NODE_ENV !== "development",
    sameSite: "none", //prevent CSRF attack
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};
