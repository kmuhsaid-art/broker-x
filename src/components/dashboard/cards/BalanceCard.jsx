import {
    Wallet,
    TrendingUp,
} from "lucide-react";

export default function BalanceCard({ data }) {

    const total =
        Number(data?.total_balance ?? 0);

    const wallet =
        Number(data?.wallet_balance ?? 0);

    const profit =
        Number(data?.today_profit ?? 0);

    const percent =
        Number(data?.today_profit_percent ?? 0);

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-400 text-sm">
                        Total Balance
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-2">

                        $
                        {total.toLocaleString(undefined,{
                            minimumFractionDigits:2,
                            maximumFractionDigits:2,
                        })}

                    </h2>

                </div>

                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center">

                    <Wallet
                        size={28}
                        className="text-yellow-400"
                    />

                </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

                <div>

                    <p className="text-gray-400 text-sm">
                        Wallet
                    </p>

                    <p className="text-white text-lg font-semibold mt-1">

                        $
                        {wallet.toLocaleString(undefined,{
                            minimumFractionDigits:2,
                            maximumFractionDigits:2,
                        })}

                    </p>

                </div>

                <div>

                    <p className="text-gray-400 text-sm">
                        Today's PnL
                    </p>

                    <div className="flex items-center gap-2 mt-1">

                        <TrendingUp
                            size={18}
                            className="text-green-400"
                        />

                        <span className="text-green-400 font-semibold">

                            $
                            {profit.toLocaleString(undefined,{
                                minimumFractionDigits:2,
                                maximumFractionDigits:2,
                            })}

                            {" ("}

                            {percent.toFixed(2)}%

                            {")"}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}