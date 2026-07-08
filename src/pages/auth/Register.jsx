import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";

import { registerSchema } from "../../validation/authSchema";
import authService from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
  try {
    setLoading(true);
    setServerError("");

    await authService.register({
      name: data.fullName,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
    });

    navigate("/login");

  } catch (error) {

    console.log(error.response);

    if (error.response?.data?.errors) {

  const firstError = Object.values(
    error.response.data.errors
  )[0][0];

  setServerError(firstError);

} else {

  setServerError(
    error.response?.data?.message ||
    "Registration failed."
  );
}

  } finally {
    setLoading(false);
  }
};

  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        subtitle="Start trading with Broker-X."
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {serverError && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400">
              {serverError}
            </div>
          )}

          <AuthInput
            label="Full Name"
            error={errors.fullName}
            {...register("fullName")}
          />

          <AuthInput
            label="Email"
            type="email"
            error={errors.email}
            {...register("email")}
          />

          <PasswordInput
            label="Password"
            error={errors.password}
            {...register("password")}
          />

          <PasswordInput
            label="Confirm Password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />

          <AuthButton disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </AuthButton>
        </form>

        <div className="mt-8 text-center text-gray-400">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-yellow-500"
          >
            Login
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}