export default function WatchlistItem({
  symbol,
  price,
  change,
}) {
  const positive = change.startsWith("+");

  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 hover:bg-white/5 transition">

      <div>

        <h3 className="font-medium text-white">
          {symbol}
        </h3>

        <p className="text-sm text-gray-400">
          {price}
        </p>

      </div>

      <span
        className={`font-semibold ${
          positive
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {change}%
      </span>

    </div>
  );
}