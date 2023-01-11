import { Response, NextFunction } from "express";
import { CustomRequest } from "../types/customRequest";
import User from "../models/User";
import errorGenerate from "../utils/errorGenerate";

const verifyRole = (role: "user" | "admin" | "superAdmin") => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const userData = await User.findOne({ email: req.user }).lean().exec();
      if (!userData) {
        errorGenerate("Forbidden", 403);
      }
      if (userData!.role === role) {
        next();
      } else {
        errorGenerate("Forbidden", 403);
      }
    } catch (err) {
      next(err);
    }
  };
};

export default verifyRole;
