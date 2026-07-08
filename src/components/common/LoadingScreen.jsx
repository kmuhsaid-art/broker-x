import { LoaderCircle } from "lucide-react";

export default function LoadingScreen({
  message = "Loading...",
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#081018]">
      <div className="text-center">

        <LoaderCircle
          size={56}
          className="mx-auto mb-6 animate-spin text-yellow-500"
        />

        <h1 className="text-4xl font-bold text-white">
          Broker<span className="text-yellow-500">-X</span>
        </h1>

        <p className="mt-4 text-gray-400">
          {message}
        </p>

      </div>
    </div>
  );
}