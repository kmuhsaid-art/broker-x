import DashboardLayout from "../components/dashboard/DashboardLayout";

import TradingWorkspace from "../components/dashboard/trading/TradingWorkspace";
import Watchlist from "../components/dashboard/market/Watchlist";
import MarketOverview from "../components/dashboard/market/MarketOverview";

export default function Trade() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Trading Terminal
          </h1>

          <p className="text-gray-400 mt-2">
            Analyze markets and execute trades.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-12 xl:col-span-9">
            <TradingWorkspace />
          </div>

          <div className="col-span-12 xl:col-span-3 space-y-6">
            <Watchlist />
            <MarketOverview />
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}