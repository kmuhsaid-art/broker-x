const assets = [
  {
    symbol: "BTC",
    amount: "1.245",
    value: "$103,240",
  },
  {
    symbol: "ETH",
    amount: "8.452",
    value: "$17,852",
  },
  {
    symbol: "USDT",
    amount: "5,250",
    value: "$5,250",
  },
];

export default function AssetList() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827]">

      <div className="border-b border-white/5 p-5">

        <h2 className="text-lg font-semibold text-white">
          Assets
        </h2>

      </div>

      {assets.map((asset) => (
        <div
          key={asset.symbol}
          className="flex items-center justify-between border-b border-white/5 px-5 py-4"
        >
          <div>

            <h3 className="font-medium text-white">
              {asset.symbol}
            </h3>

            <p className="text-sm text-gray-400">
              {asset.amount}
            </p>

          </div>

          <div className="font-semibold text-white">
            {asset.value}
          </div>

        </div>
      ))}

    </div>
  );
}
