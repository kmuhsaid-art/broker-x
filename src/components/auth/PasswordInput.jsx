import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  error,
  ...props
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block mb-2 text-gray-300">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          type={show ? "text" : "password"}
          className="
          w-full
          bg-[#081018]
          border
          border-white/10
          rounded-xl
          px-4
          py-3
          pr-12
          text-white
          outline-none
          focus:border-yellow-500
          transition
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-400
          "
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}