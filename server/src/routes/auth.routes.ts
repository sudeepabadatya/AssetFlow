import { Router } from "express";

import {
  register,
  login,
  resetPasswordController,forgotPasswordController
} from "../controllers/auth.controller";

import { validate } from "../middleware/validate.middleware";

import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema
} from "../validators/auth.validator";

const router = Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

router.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  forgotPasswordController
);

router.post(
  "/reset-password/:token",
  resetPasswordController
);
export default router;