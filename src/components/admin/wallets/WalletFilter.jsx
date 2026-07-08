export default function WalletFilter() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="grid gap-4 lg:grid-cols-5">

        <input
          placeholder="Search User..."
          className="rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3"
        />

        <select className="rounded-xl border border-white/10 bg-[#0F172A] px-4">

          <option>All Assets</option>
          <option>BTC</option>
          <option>ETH</option>
          <option>USDT</option>
          <option>XAU</option>

        </select>

        <select className="rounded-xl border border-white/10 bg-[#0F172A] px-4">

          <option>Wallet Status</option>
          <option>Active</option>
          <option>Locked</option>

        </select>

        <input
          type="date"
          className="rounded-xl border border-white/10 bg-[#0F172A] px-4"
        />

        <button className="rounded-xl bg-yellow-500 font-semibold text-black">
          Search
        </button>

      </div>

    </div>
  );
}