import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must contain at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .regex(/[A-Z]/, "Must contain one uppercase letter")
    .regex(/[0-9]/, "Must contain one number"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters"),
});
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address"),
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .regex(/[A-Z]/, "One uppercase letter required")
    .regex(/[0-9]/, "One number required"),
});