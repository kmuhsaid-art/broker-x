export default function WalletStatement() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Statement
      </h2>

      <div className="flex gap-4">

        <button className="flex-1 rounded-xl bg-green-500 py-3 font-bold">
          Export CSV
        </button>

        <button className="flex-1 rounded-xl bg-yellow-500 py-3 font-bold text-black">
          Export PDF
        </button>

      </div>

    </div>
  );
}