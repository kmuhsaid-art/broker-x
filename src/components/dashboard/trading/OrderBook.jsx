import { BookOpen } from "lucide-react";

const bids = [
    { price: "118,250.50", qty: "0.5124" },
    { price: "118,249.90", qty: "1.2140" },
    { price: "118,248.75", qty: "0.8941" },
    { price: "118,247.10", qty: "2.0081" },
    { price: "118,246.60", qty: "0.3301" },
];

const asks = [
    { price: "118,251.20", qty: "0.8123" },
    { price: "118,252.00", qty: "0.5000" },
    { price: "118,253.50", qty: "1.1045" },
    { price: "118,254.20", qty: "0.7030" },
    { price: "118,255.80", qty: "2.1124" },
];

export default function OrderBook() {

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 h-[620px]">

            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">

                <BookOpen className="text-yellow-400" size={20} />

                <h2 className="text-white text-xl font-semibold">
                    Order Book
                </h2>

            </div>

            <div className="p-5">

                <div className="grid grid-cols-2 text-xs text-gray-400 mb-3">

                    <span>Price</span>

                    <span className="text-right">Amount</span>

                </div>

                <div className="space-y-2">

                    {asks.map((item, index) => (

                        <div
                            key={index}
                            className="grid grid-cols-2 text-sm"
                        >

                            <span className="text-red-400">
                                {item.price}
                            </span>

                            <span className="text-right text-white">
                                {item.qty}
                            </span>

                        </div>

                    ))}

                </div>

                <div className="my-6 border-t border-white/10"></div>

                <div className="space-y-2">

                    {bids.map((item, index) => (

                        <div
                            key={index}
                            className="grid grid-cols-2 text-sm"
                        >

                            <span className="text-green-400">
                                {item.price}
                            </span>

                            <span className="text-right text-white">
                                {item.qty}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}