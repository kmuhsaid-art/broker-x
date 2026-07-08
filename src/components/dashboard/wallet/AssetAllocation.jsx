const assets = [
  {
    asset: "USDT",
    balance: "85,000",
    value: "$85,000",
  },
  {
    asset: "BTC",
    balance: "0.85",
    value: "$92,600",
  },
  {
    asset: "ETH",
    balance: "8.20",
    value: "$21,400",
  },
];

export default function AssetAllocation() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Asset Allocation
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400">

            <th>Asset</th>
            <th>Balance</th>
            <th>USD Value</th>

          </tr>

        </thead>

        <tbody>

          {assets.map((asset) => (

            <tr
              key={asset.asset}
              className="border-t border-white/5 h-14"
            >

              <td>{asset.asset}</td>

              <td>{asset.balance}</td>

              <td>{asset.value}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}