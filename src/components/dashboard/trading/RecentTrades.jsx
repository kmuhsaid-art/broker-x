import { Activity } from "lucide-react";

const trades = [

    {
        side: "BUY",
        price: "118250.50",
        qty: "0.512",
        time: "12:40:15",
    },

    {
        side: "SELL",
        price: "118248.90",
        qty: "0.830",
        time: "12:40:18",
    },

    {
        side: "BUY",
        price: "118251.40",
        qty: "0.100",
        time: "12:40:21",
    },

    {
        side: "SELL",
        price: "118249.10",
        qty: "0.950",
        time: "12:40:25",
    },

];

export default function RecentTrades() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10">

            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">

                <Activity className="text-green-400" size={20} />

                <h2 className="text-white text-xl font-semibold">

                    Recent Trades

                </h2>

            </div>

            <div className="p-6">

                <table className="w-full">

                    <thead>

                        <tr className="text-gray-400 text-sm">

                            <th className="text-left">Side</th>

                            <th className="text-left">Price</th>

                            <th className="text-left">Amount</th>

                            <th className="text-right">Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {trades.map((trade, index) => (

                            <tr
                                key={index}
                                className="border-t border-white/5"
                            >

                                <td
                                    className={`py-3 font-semibold ${
                                        trade.side === "BUY"
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }`}
                                >

                                    {trade.side}

                                </td>

                                <td className="text-white">

                                    {trade.price}

                                </td>

                                <td className="text-white">

                                    {trade.qty}

                                </td>

                                <td className="text-right text-gray-400">

                                    {trade.time}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}