import prisma from "../config/prisma";
import { comparePassword, hashPassword } from "../utils/hash";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt";

import {
  generateResetToken,
  hashResetToken,
} from "../utils/resetToken";

import { sendResetEmail } from "./email.service";


export async function resetPassword(
  token: string,

  password: string
) {
  const hashedToken = hashResetToken(token);

  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: hashedToken,

      resetPasswordExpiry: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    throw new Error("Invalid or expired token");
  }

  const hashedPassword =
    await hashPassword(password);

  await prisma.user.update({
    where: {
      id: user.id,
    },

    data: {
      password: hashedPassword,

      resetPasswordToken: null,

      resetPasswordExpiry: null,
    },
  });
}
export async function forgotPassword(
  email: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return;
  }

  const token = generateResetToken();

  const hashedToken = hashResetToken(token);

  const expiry = new Date(
    Date.now() + 15 * 60 * 1000
  );

  await prisma.user.update({
    where: {
      email,
    },

    data: {
      resetPasswordToken: hashedToken,

      resetPasswordExpiry: expiry,
    },
  });

  const resetLink =
    `${process.env.CLIENT_URL}/reset-password/${token}`;

  await sendResetEmail(email, resetLink);
}
interface RegisterUser {
  fullName: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterUser) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
    },
  });
}

interface LoginUser {
  email: string;
  password: string;
}


export async function loginUser(data: LoginUser) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  if (user.status !== "ACTIVE") {
    throw new Error("Account is inactive");
  }

  const isPasswordCorrect = await comparePassword(
    data.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);

  const refreshToken = generateRefreshToken(payload);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken,
    },
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
}