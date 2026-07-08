const data = [
  {
    title: "Top Gainer",
    symbol: "SOL/USDT",
    value: "+12.45%",
    color: "text-green-500",
  },
  {
    title: "Top Loser",
    symbol: "DOGE/USDT",
    value: "-8.72%",
    color: "text-red-500",
  },
  {
    title: "Most Active",
    symbol: "BTC/USDT",
    value: "$12.4B",
    color: "text-blue-400",
  },
];

export default function MarketOverview() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

      <h2 className="text-lg font-semibold text-white mb-6">
        Market Overview
      </h2>

      <div className="space-y-5">

        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-between"
          >

            <div>

              <p className="text-gray-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-white font-semibold">
                {item.symbol}
              </h3>

            </div>

            <span className={item.color}>
              {item.value}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}