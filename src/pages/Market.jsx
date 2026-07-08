import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Market() {
    return (
        <DashboardLayout>

            <div className="space-y-6">

                <div>

                    <h1 className="text-3xl font-bold text-white">
                        Markets
                    </h1>

                    <p className="text-gray-400 mt-2">
                        View all available trading markets.
                    </p>

                </div>

                <div className="bg-[#111827] rounded-2xl border border-white/10 p-8">

                    <h2 className="text-xl text-white font-semibold">
                        Market List
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Market table will be implemented here.
                    </p>

                </div>

            </div>

        </DashboardLayout>
    );
}