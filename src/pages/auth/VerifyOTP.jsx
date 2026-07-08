import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthButton from "../../components/auth/AuthButton";

export default function VerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // sementara langsung lanjut
    navigate("/reset-password");
  };

  return (
    <AuthLayout>

      <AuthCard
        title="Verify OTP"
        subtitle="Enter the verification code sent to your email."
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />

          <AuthButton>
            Verify Code
          </AuthButton>

        </form>

      </AuthCard>

    </AuthLayout>
  );
}