import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.forgotPassword(data);

      setSuccess(
        "Password reset link has been sent to your email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password"
        subtitle="Enter your email."
      >
        {success ? (
          <div className="text-green-400">
            {success}
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="space-y-6"
          >
            <AuthInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <AuthButton disabled={loading}>
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </AuthButton>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-yellow-500"
          >
            Back to Login
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}