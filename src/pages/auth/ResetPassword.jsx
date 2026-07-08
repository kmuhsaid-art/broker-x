import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/authService";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.resetPassword({
        password,
        confirmPassword,
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Reset Password"
        subtitle="Create your new password."
      >
        <form
          onSubmit={submit}
          className="space-y-6"
        >
          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <AuthButton disabled={loading}>
            {loading
              ? "Saving..."
              : "Save Password"}
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}