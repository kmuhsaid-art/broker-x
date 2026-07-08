export default function InternalTransfer() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Internal Transfer
      </h2>

      <select className="w-full bg-[#081018] rounded-xl p-3 text-white mb-4">
        <option>Spot Wallet</option>
        <option>Funding Wallet</option>
        <option>Futures Wallet</option>
      </select>

      <select className="w-full bg-[#081018] rounded-xl p-3 text-white mb-4">
        <option>Funding Wallet</option>
        <option>Spot Wallet</option>
        <option>Futures Wallet</option>
      </select>

      <input
        placeholder="Amount"
        className="w-full bg-[#081018] rounded-xl p-3 text-white mb-5"
      />

      <button className="w-full rounded-xl bg-blue-600 py-3 font-bold">
        Transfer
      </button>

    </div>
  );
}