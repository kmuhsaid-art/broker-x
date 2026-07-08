import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Email is invalid"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name is required"),

    email: z
      .string()
      .email("Invalid email"),

    password: z
      .string()
      .min(6, "Minimum 6 characters"),

    confirmPassword: z
      .string(),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );