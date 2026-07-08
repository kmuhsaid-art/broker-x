import useMarketTicker from "../../hooks/useMarketTicker";

export default function MarketTicker({ symbol }) {

  const { tickers } = useMarketTicker();

  const ticker = tickers[symbol];

  const price = ticker?.c ?? "--";

  const change = Number(ticker?.P ?? 0);

  const positive = change >= 0;

  return (

    <div
      className="
      flex
      items-center
      justify-between
      rounded-xl
      bg-[#111827]
      border
      border-white/5
      p-4
      "
    >

      <div>

        <h3 className="text-white font-semibold">
          {symbol}
        </h3>

        <p className="text-gray-400 text-sm">
          Live Market
        </p>

      </div>

      <div className="text-right">

        <p className="text-white font-semibold">
          {price}
        </p>

        <p
          className={
            positive
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {positive ? "+" : ""}
          {change.toFixed(2)}%
        </p>

      </div>

    </div>

  );

}