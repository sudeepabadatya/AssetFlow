import { Request, Response } from "express";

import {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
} from "../services/auth.services";

import { successResponse, errorResponse } from "../utils/response";

// Type for route params
interface ResetPasswordParams {
  token: string;
}

export async function register(req: Request, res: Response) {
  try {
    const user = await registerUser(req.body);

    return successResponse(res, "Account created successfully", user, 201);
  } catch (error) {
    return errorResponse(
      res,
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}

export async function login(req: Request, res: Response) {
  try {
    const result = await loginUser(req.body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return successResponse(res, "Login successful", {
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error) {
    return errorResponse(
      res,
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}

export async function forgotPasswordController(req: Request, res: Response) {
  try {
    await forgotPassword(req.body.email);

    return successResponse(res, "Password reset link sent");
  } catch (error) {
    return errorResponse(
      res,
      error instanceof Error ? error.message : "Unable to send reset email",
    );
  }
}

export async function resetPasswordController(
  req: Request<ResetPasswordParams>,
  res: Response,
) {
  try {
    const { token } = req.params;
    const { password } = req.body;

    await resetPassword(token, password);

    return successResponse(res, "Password reset successfully");
  } catch (error) {
    return errorResponse(
      res,
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}
