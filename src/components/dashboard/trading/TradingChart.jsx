import {
    LineChart,
} from "lucide-react";

export default function TradingChart() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 h-[620px] overflow-hidden">

            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">

                <LineChart
                    size={22}
                    className="text-yellow-400"
                />

                <h2 className="text-white text-xl font-semibold">

                    Trading Chart

                </h2>

            </div>

            <div
                id="tradingview-chart"
                className="w-full h-[560px] flex items-center justify-center"
            >

                <p className="text-gray-500">

                    TradingView Chart will appear here

                </p>

            </div>

        </div>

    );

}