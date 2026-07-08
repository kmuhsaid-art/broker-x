import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Wallet() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Wallet
        </h1>

        <div className="bg-[#131A29] rounded-2xl p-6 border border-white/10">
          <p className="text-gray-400">
            Wallet balances will appear here.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}