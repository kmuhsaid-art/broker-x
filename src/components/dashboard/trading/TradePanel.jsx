import { useState } from "react";

export default function TradePanel() {

    const [side, setSide] = useState("BUY");

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10">

            <div className="flex">

                <button
                    onClick={() => setSide("BUY")}
                    className={`flex-1 py-4 font-semibold ${
                        side === "BUY"
                            ? "bg-green-500 text-white"
                            : "bg-transparent text-gray-400"
                    }`}
                >

                    BUY

                </button>

                <button
                    onClick={() => setSide("SELL")}
                    className={`flex-1 py-4 font-semibold ${
                        side === "SELL"
                            ? "bg-red-500 text-white"
                            : "bg-transparent text-gray-400"
                    }`}
                >

                    SELL

                </button>

            </div>

            <div className="p-6 space-y-5">

                <div>

                    <label className="block text-gray-400 mb-2">

                        Price

                    </label>

                    <input
                        className="w-full rounded-xl bg-[#081018] border border-white/10 p-3 text-white"
                        placeholder="0.00"
                    />

                </div>

                <div>

                    <label className="block text-gray-400 mb-2">

                        Amount

                    </label>

                    <input
                        className="w-full rounded-xl bg-[#081018] border border-white/10 p-3 text-white"
                        placeholder="0.00"
                    />

                </div>

                <button
                    className={`w-full py-3 rounded-xl font-bold ${
                        side === "BUY"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                    }`}
                >

                    {side === "BUY"
                        ? "Buy Now"
                        : "Sell Now"}

                </button>

            </div>

        </div>

    );

}