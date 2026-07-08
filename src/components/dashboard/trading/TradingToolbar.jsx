import {
  Clock3,
  CandlestickChart,
  Maximize2,
} from "lucide-react";

const timeframes = [
  "1m",
  "5m",
  "15m",
  "1H",
  "4H",
  "1D",
];

export default function TradingToolbar() {
  return (
    <div className="flex items-center justify-between bg-[#111827] rounded-xl p-4 border border-white/5">

      <div className="flex gap-2">

        {timeframes.map((tf) => (
          <button
            key={tf}
            className="
            px-4
            py-2
            rounded-lg
            text-gray-300
            hover:bg-yellow-500
            hover:text-black
            transition
            "
          >
            {tf}
          </button>
        ))}

      </div>

      <div className="flex gap-3">

        <button className="text-gray-400 hover:text-yellow-500">
          <Clock3 size={20} />
        </button>

        <button className="text-gray-400 hover:text-yellow-500">
          <CandlestickChart size={20} />
        </button>

        <button className="text-gray-400 hover:text-yellow-500">
          <Maximize2 size={20} />
        </button>

      </div>

    </div>
  );
}