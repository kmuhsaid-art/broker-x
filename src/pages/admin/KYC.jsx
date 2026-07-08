import AdminLayout from "../../components/admin/AdminLayout";

import KycStatistics from "../../components/admin/kyc/KycStatistics";
import KycFilter from "../../components/admin/kyc/KycFilter";
import KycTable from "../../components/admin/kyc/KycTable";

export default function KYC() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-white">
            KYC Management
          </h1>

          <p className="mt-2 text-gray-400">
            Verify customer identity documents.
          </p>

        </div>

        <KycStatistics />

        <KycFilter />

        <KycTable />

      </div>

    </AdminLayout>
  );
}