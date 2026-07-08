import useMarkets from "../../../hooks/useMarkets";
import { useTrade } from "../../../context/TradeContext";

export default function MarketSelector() {

  const { markets, loading } = useMarkets();

  const {

    selectedSymbol,

    setSelectedSymbol,

  } = useTrade();

  if (loading) {

    return (

      <div className="bg-[#111827] rounded-xl p-4 text-gray-400">

        Loading Markets...

      </div>

    );

  }

  return (

    <div className="bg-[#111827] rounded-xl border border-white/5 p-4">

      <label className="block text-gray-400 text-sm mb-2">

        Trading Pair

      </label>

      <select

        value={selectedSymbol}

        onChange={(e) => setSelectedSymbol(e.target.value)}

        className="
          w-full
          bg-[#0F172A]
          border
          border-white/10
          rounded-lg
          px-4
          py-3
          text-white
          outline-none
        "

      >

        {markets.map((market) => (

          <option

            key={market.id}

            value={market.symbol}

          >

            {market.display_name}

          </option>

        ))}

      </select>

    </div>

  );

}