import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export interface AuthRequest extends Request {
  user?: any;
}

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Access token missing",
    });
  }

  const token = authHeader.split(" ")[1];

  // ✅ Check token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Invalid Authorization header",
    });
  }

  try {
    const payload = verifyAccessToken(token);

    req.user = payload;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}