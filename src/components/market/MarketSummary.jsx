import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function MarketSummary({ markets }) {
  const gainers = markets.filter((m) => m.change > 0).length;
  const losers = markets.filter((m) => m.change < 0).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      <div className="bg-[#131A29] rounded-2xl p-6 border border-white/10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Markets
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {markets.length}
            </h2>

          </div>

          <Activity className="text-yellow-500" size={34} />

        </div>

      </div>

      <div className="bg-[#131A29] rounded-2xl p-6 border border-white/10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Gainers
            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-2">
              {gainers}
            </h2>

          </div>

          <TrendingUp className="text-green-400" size={34} />

        </div>

      </div>

      <div className="bg-[#131A29] rounded-2xl p-6 border border-white/10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm">
              Losers
            </p>

            <h2 className="text-3xl font-bold text-red-400 mt-2">
              {losers}
            </h2>

          </div>

          <TrendingDown className="text-red-400" size={34} />

        </div>

      </div>

    </div>
  );
}