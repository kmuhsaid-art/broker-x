import { useMemo, useState } from "react";

import { ArrowUpDown } from "lucide-react";

import { markets as marketData } from "../../data/markets";

import MarketSearch from "./MarketSearch";
import MarketFilters from "./MarketFilters";
import MarketSummary from "./MarketSummary";
import MarketRow from "./MarketRow";

export default function MarketTable() {
  const [markets, setMarkets] = useState(marketData);

  const [search, setSearch] = useState("");

  const [active, setActive] = useState("All");

  const [sortBy, setSortBy] = useState("symbol");

  const toggleFavorite = (id) => {
    setMarkets((prev) =>
      prev.map((market) =>
        market.id === id
          ? {
              ...market,
              favorite: !market.favorite,
            }
          : market
      )
    );
  };

  const filteredMarkets = useMemo(() => {
    let result = [...markets];

    if (active !== "All") {
      result = result.filter(
        (market) => market.category === active
      );
    }

    if (search !== "") {
      result = result.filter((market) =>
        market.symbol
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "price":
        result.sort((a, b) => b.price - a.price);
        break;

      case "change":
        result.sort((a, b) => b.change - a.change);
        break;

      default:
        result.sort((a, b) =>
          a.symbol.localeCompare(b.symbol)
        );
    }

    return result;
  }, [markets, active, search, sortBy]);

  return (
    <>
      <MarketSummary markets={markets} />

      <MarketSearch
        search={search}
        setSearch={setSearch}
      />

      <MarketFilters
        active={active}
        setActive={setActive}
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10 mt-8">

        <table className="w-full">

          <thead className="bg-[#131A29]">

            <tr className="text-left text-gray-400">

              <th className="px-4 py-5"></th>

              <th>

                <button
                  onClick={() =>
                    setSortBy("symbol")
                  }
                  className="flex items-center gap-2"
                >
                  Symbol

                  <ArrowUpDown size={14} />

                </button>

              </th>

              <th>Category</th>

              <th>

                <button
                  onClick={() =>
                    setSortBy("price")
                  }
                  className="flex items-center gap-2"
                >
                  Price

                  <ArrowUpDown size={14} />

                </button>

              </th>

              <th>

                <button
                  onClick={() =>
                    setSortBy("change")
                  }
                  className="flex items-center gap-2"
                >
                  24H

                  <ArrowUpDown size={14} />

                </button>

              </th>

              <th>High</th>

              <th>Low</th>

              <th>Volume</th>

              <th className="text-center">

                Trade

              </th>

            </tr>

          </thead>

          <tbody>

            {filteredMarkets.map((item) => (
              <MarketRow
                key={item.id}
                item={item}
                onFavorite={toggleFavorite}
              />
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}