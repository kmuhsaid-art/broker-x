export default function DepositCard() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Deposit
      </h2>

      <input
        placeholder="Amount"
        className="mb-4 w-full rounded-xl bg-[#081018] p-3 text-white"
      />

      <select
        className="mb-6 w-full rounded-xl bg-[#081018] p-3 text-white"
      >
        <option>USDT</option>
        <option>BTC</option>
        <option>ETH</option>
      </select>

      <button
        className="w-full rounded-xl bg-green-500 py-3 font-bold"
      >
        Deposit
      </button>

    </div>
  );
}