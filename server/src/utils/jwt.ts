import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

const ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET || "access_secret_key";

const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "refresh_secret_key";

const ACCESS_EXPIRES =
  (process.env.ACCESS_TOKEN_EXPIRES as SignOptions["expiresIn"]) || "15m";

const REFRESH_EXPIRES =
  (process.env.REFRESH_TOKEN_EXPIRES as SignOptions["expiresIn"]) || "7d";

export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: ACCESS_EXPIRES,
  });
}

export function generateRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: REFRESH_EXPIRES,
  });
}


export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
}