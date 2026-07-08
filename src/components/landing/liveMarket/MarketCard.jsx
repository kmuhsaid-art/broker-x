import { TrendingUp, TrendingDown } from "lucide-react";
import { formatPrice } from "../../../utils/formatPrice";

export default function MarketCard({ market }) {
  const positive = market.change >= 0;

  return (
    <div
      className="
        bg-[#131A29]
        border
        border-white/10
        rounded-2xl
        p-6
        hover:border-yellow-500
        transition
        duration-300
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-white font-semibold text-lg">
            {market.symbol}
          </p>

          <p className="text-gray-400 text-sm mt-1">
            {market.category}
          </p>

        </div>

        {positive ? (
          <TrendingUp
            className="text-green-400"
            size={28}
          />
        ) : (
          <TrendingDown
            className="text-red-400"
            size={28}
          />
        )}

      </div>

      <h2
        className={`text-3xl font-bold mt-8 ${
          positive
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {formatPrice(market.price)}
      </h2>

      <p
        className={`mt-2 ${
          positive
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {positive ? "+" : ""}
        {market.change.toFixed(2)}%
      </p>

    </div>
  );
}