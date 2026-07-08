import {
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-2 gap-4">

      <button
        type="button"
        className="flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-[#111827] py-3 text-white transition hover:border-yellow-500"
      >
        <FaGoogle />
        Google
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-[#111827] py-3 text-white transition hover:border-yellow-500"
      >
        <FaFacebookF />
        Facebook
      </button>

    </div>
  );
}