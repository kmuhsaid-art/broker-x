import PlatformFeature from "./PlatformFeature";
import { platformFeatures } from "./platformData";

import {
  CandlestickChart,
  Wallet,
  TrendingUp,
} from "lucide-react";

export default function Platform() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[4px] text-yellow-500 text-sm">
              Trading Platform
            </p>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              One Platform.
              <br />
              Unlimited Opportunities.
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Experience professional-grade trading with
              real-time market data, portfolio management,
              advanced charts and institutional security.
            </p>

            <div className="grid gap-6 mt-10">

              {platformFeatures.map((item) => (
                <PlatformFeature
                  key={item.id}
                  {...item}
                />
              ))}

            </div>

            <button
              className="
              mt-12
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              hover:bg-yellow-400
              transition
              "
            >
              Explore Platform
            </button>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
              bg-[#131A29]
              border
              border-white/10
              rounded-3xl
              p-8
              shadow-2xl
              "
            >

              <div className="flex justify-between">

                <div>

                  <p className="text-gray-400">
                    Total Balance
                  </p>

                  <h2 className="text-white text-4xl font-bold mt-2">
                    $126,845
                  </h2>

                </div>

                <Wallet
                  size={42}
                  className="text-yellow-500"
                />

              </div>

              <div
                className="
                h-72
                rounded-2xl
                mt-10
                bg-gradient-to-br
                from-[#1A2438]
                to-[#0D1523]
                flex
                items-center
                justify-center
                "
              >

                <CandlestickChart
                  size={120}
                  className="text-yellow-500"
                />

              </div>

              <div className="flex justify-between mt-10">

                <div>

                  <p className="text-gray-400">
                    Today's Profit
                  </p>

                  <h3 className="text-green-400 text-2xl font-bold mt-2">
                    +18.74%
                  </h3>

                </div>

                <TrendingUp
                  size={50}
                  className="text-green-400"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}