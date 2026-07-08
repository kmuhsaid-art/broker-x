const assets = [
  { asset: "USDT", balance: "15000" },
  { asset: "BTC", balance: "0.25" },
];

export default function FundingWallet() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Funding Wallet
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