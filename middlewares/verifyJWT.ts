import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader =
    req.headers.authorization || (req.headers.Authorization as string);

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET?.toString()!
    ) as { email: string };
    (req as CustomRequest).user = decoded.email;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export default verifyJWT;
