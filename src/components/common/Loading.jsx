import { LoaderCircle } from "lucide-react";

export default function LoadingScreen({
  message = "Loading..."
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#081018]">
      <div className="text-center">

        <div className="flex justify-center mb-6">
          <LoaderCircle
            className="animate-spin text-yellow-500"
            size={50}
          />
        </div>

        <h1 className="text-4xl font-bold text-yellow-500">
          Broker-X
        </h1>

        <p className="text-gray-400 mt-3">
          {message}
        </p>

      </div>
    </div>
  );
}