import {
    BellRing,
    TrendingUp,
} from "lucide-react";

export default function PriceAlerts({ data }) {

    const alerts = data?.price_alerts ?? [];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

            <div className="flex items-center gap-3 mb-6">

                <BellRing
                    size={22}
                    className="text-green-400"
                />

                <h2 className="text-xl font-semibold text-white">

                    Price Alerts

                </h2>

            </div>

            {
                alerts.length === 0 ? (

                    <div className="text-center py-10">

                        <TrendingUp
                            size={40}
                            className="mx-auto text-gray-600"
                        />

                        <p className="text-gray-500 mt-4">

                            No active alerts

                        </p>

                    </div>

                ) : (

                    <div className="space-y-4">

                        {alerts.map((alert) => (

                            <div
                                key={alert.id}
                                className="flex items-center justify-between bg-white/5 rounded-xl p-4"
                            >

                                <div>

                                    <p className="text-white font-semibold">

                                        {alert.symbol}

                                    </p>

                                    <p className="text-gray-400 text-sm">

                                        Target

                                        {" "}

                                        {alert.target_price}

                                    </p>

                                </div>

                                <span className="text-yellow-400">

                                    {alert.direction}

                                </span>

                            </div>

                        ))}

                    </div>

                )

            }

        </div>

    );

}