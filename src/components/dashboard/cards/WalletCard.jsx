import {
    Wallet,
    ChevronRight,
} from "lucide-react";

export default function WalletCard({ data }) {

    const wallets = data?.wallets ?? [];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

            <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">

                    <Wallet className="text-yellow-400" size={22} />

                    <h2 className="text-xl font-semibold text-white">
                        My Assets
                    </h2>

                </div>

            </div>

            {
                wallets.length === 0 ? (

                    <div className="text-center py-10 text-gray-500">

                        No assets available

                    </div>

                ) : (

                    <div className="space-y-4">

                        {wallets.map((wallet) => (

                            <div
                                key={wallet.id}
                                className="flex items-center justify-between border-b border-white/5 pb-3"
                            >

                                <div>

                                    <p className="text-white font-semibold">

                                        {wallet.currency}

                                    </p>

                                    <p className="text-sm text-gray-500">

                                        Locked :

                                        {" "}

                                        {Number(
                                            wallet.locked_balance
                                        ).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 8,
                                        })}

                                    </p>

                                </div>

                                <div className="flex items-center gap-3">

                                    <div className="text-right">

                                        <p className="text-white font-semibold">

                                            {Number(
                                                wallet.balance
                                            ).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 8,
                                            })}

                                        </p>

                                    </div>

                                    <ChevronRight
                                        size={18}
                                        className="text-gray-500"
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                )

            }

        </div>

    );

}