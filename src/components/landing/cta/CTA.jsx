import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="
          rounded-3xl
          border border-yellow-500/20
          bg-gradient-to-r
          from-yellow-500/10
          via-[#131A29]
          to-[#131A29]
          p-16
          text-center
        ">

          <span className="uppercase tracking-[4px] text-yellow-500 text-sm">
            Start Trading Today
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Join Thousands of Traders Worldwide
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Open your Broker-X account today and gain access to Forex,
            Cryptocurrencies, Gold, Commodities, Stocks, and Global Indices
            through one secure and professional trading platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <button className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              font-bold
              px-8
              py-4
              rounded-xl
              transition
              flex
              items-center
              gap-2
            ">
              Open Live Account
              <ArrowRight size={20} />
            </button>

            <button className="
              border border-white/20
              text-white
              hover:border-yellow-500
              hover:text-yellow-500
              px-8
              py-4
              rounded-xl
              transition
            ">
              Try Demo Account
            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h3 className="text-3xl font-bold text-white">250K+</h3>
              <p className="text-gray-400 mt-2">Active Traders</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">$12.8B</h3>
              <p className="text-gray-400 mt-2">Daily Volume</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">180+</h3>
              <p className="text-gray-400 mt-2">Countries</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}