const assets = [
  { asset: "BTC", balance: "0.845" },
  { asset: "ETH", balance: "12.15" },
  { asset: "SOL", balance: "285.22" },
];

export default function SpotWallet() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Spot Wallet
      </h2>

      {assets.map((item) => (

        <div
          key={item.asset}
          className="flex justify-between py-3 border-b border-white/5"
        >

          <span>{item.asset}</span>

          <span>{item.balance}</span>

        </div>

      ))}

    </div>
  );
}