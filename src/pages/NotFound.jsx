import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#081018] flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        <AlertTriangle
          size={70}
          className="mx-auto text-yellow-500"
        />

        <h1 className="mt-6 text-6xl font-bold text-white">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}