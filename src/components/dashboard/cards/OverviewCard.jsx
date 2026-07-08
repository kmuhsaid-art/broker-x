import {
    BarChart3,
    Receipt,
    Briefcase,
    Wallet,
} from "lucide-react";

export default function OverviewCard({ data }) {

    const statistics = data?.statistics ?? {};

    const cards = [
        {
            title: "Wallets",
            value: statistics.wallets ?? 0,
            icon: Wallet,
            color: "text-blue-400",
        },
        {
            title: "Open Orders",
            value: statistics.orders ?? 0,
            icon: Receipt,
            color: "text-yellow-400",
        },
        {
            title: "Open Positions",
            value: statistics.positions ?? 0,
            icon: Briefcase,
            color: "text-green-400",
        },
        {
            title: "Trades",
            value: statistics.trades ?? 0,
            icon: BarChart3,
            color: "text-purple-400",
        },
    ];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">

                Overview

            </h2>

            <div className="space-y-4">

                {cards.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="flex items-center justify-between border-b border-white/5 pb-4"
                        >

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">

                                    <Icon
                                        size={20}
                                        className={item.color}
                                    />

                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm">

                                        {item.title}

                                    </p>

                                    <p className="text-white font-semibold">

                                        {item.value}

                                    </p>

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}