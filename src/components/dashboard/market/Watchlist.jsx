import WatchlistItem from "./WatchlistItem";

const markets = [
  {
    symbol: "BTC/USDT",
    price: "104,520.34",
    change: "+2.35",
  },
  {
    symbol: "ETH/USDT",
    price: "6,120.88",
    change: "+1.24",
  },
  {
    symbol: "XAU/USD",
    price: "3,356.44",
    change: "-0.42",
  },
  {
    symbol: "EUR/USD",
    price: "1.1742",
    change: "+0.15",
  },
  {
    symbol: "NAS100",
    price: "23,840.51",
    change: "+0.83",
  },
];

export default function Watchlist() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5">

      <div className="p-5 border-b border-white/5">

        <h2 className="text-lg font-semibold text-white">
          Watchlist
        </h2>

      </div>

      <div>

        {markets.map((item) => (
          <WatchlistItem
            key={item.symbol}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}