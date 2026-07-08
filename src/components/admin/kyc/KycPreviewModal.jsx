export default function KycPreviewModal({
  open,
  image,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

      <div className="w-full max-w-5xl rounded-2xl bg-[#111827] p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Document Preview
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 px-4 py-2"
          >
            Close
          </button>

        </div>

        <img
          src={image}
          alt=""
          className="w-full rounded-xl"
        />

      </div>

    </div>
  );
}