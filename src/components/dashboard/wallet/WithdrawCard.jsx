export default function WithdrawCard() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Withdraw
      </h2>

      <input
        placeholder="Wallet Address"
        className="mb-4 w-full rounded-xl bg-[#081018] p-3 text-white"
      />

      <input
        placeholder="Amount"
        className="mb-6 w-full rounded-xl bg-[#081018] p-3 text-white"
      />

      <button
        className="w-full rounded-xl bg-red-500 py-3 font-bold"
      >
        Withdraw
      </button>

    </div>
  );
}