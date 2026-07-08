import { useState } from "react";

import ChartTabs from "./ChartTabs";
import TradingChartCanvas from "./TradingChartCanvas";

export default function TradingChart() {
  const [symbol, setSymbol] =
    useState("BTC/USD");

  return (
    <section className="py-24 bg-[#081018]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-yellow-500 text-sm">

            Professional Chart

          </p>

          <h2 className="text-5xl font-bold text-white mt-4">

            Analyze Markets Like A Pro

          </h2>

          <p className="text-gray-400 mt-5">

            Real interactive chart powered by Lightweight Charts.

          </p>

        </div>

        <ChartTabs
          active={symbol}
          setActive={setSymbol}
        />

        <TradingChartCanvas
          symbol={symbol}
        />

      </div>

    </section>
  );
}