import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function History() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Transaction History
        </h1>

        <div className="bg-[#131A29] rounded-2xl p-6 border border-white/10">
          <p className="text-gray-400">
            Transaction history will appear here.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}