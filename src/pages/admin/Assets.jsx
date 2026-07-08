import AdminLayout from "../../components/admin/AdminLayout";

import AssetStatistics from "../../components/admin/assets/AssetStatistics";
import AssetFilter from "../../components/admin/assets/AssetFilter";
import AssetTable from "../../components/admin/assets/AssetTable";

export default function Assets() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Asset Management
          </h1>

          <p className="mt-2 text-gray-400">
            Manage all trading instruments.
          </p>

        </div>

        <AssetStatistics />

        <AssetFilter />

        <AssetTable />

      </div>

    </AdminLayout>
  );
}