import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function Wallets() {
    return (
        <DashboardLayout>

            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Wallet
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Manage your balances, deposits and withdrawals.
                    </p>
                </div>

                <div className="bg-[#111827] rounded-2xl border border-white/10 p-8">

                    <h2 className="text-xl font-semibold text-white">
                        Wallet Overview
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Wallet data will appear here.
                    </p>

                </div>

            </div>

        </DashboardLayout>
    );
}