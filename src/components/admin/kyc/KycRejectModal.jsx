import { useState } from "react";

export default function KycRejectModal({
  open,
  onClose,
}) {
  const [reason, setReason] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

      <div className="w-full max-w-xl rounded-2xl bg-[#111827] p-6">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Reject Verification
        </h2>

        <textarea
          rows={5}
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
          placeholder="Reason..."
          className="w-full rounded-xl border border-white/10 bg-[#0F172A] p-4"
        />

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl bg-gray-700 px-6 py-3"
          >
            Cancel
          </button>

          <button
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold"
          >
            Reject
          </button>

        </div>

      </div>

    </div>
  );
}