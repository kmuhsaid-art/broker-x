import AdminLayout from "../../components/admin/AdminLayout";
import DepositStatistics from "../../components/admin/deposits/DepositStatistics";
import DepositFilter from "../../components/admin/deposits/DepositFilter";
import DepositTable from "../../components/admin/deposits/DepositTable";

export default function Deposits() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Deposit Management
        </h1>

        <DepositStatistics />

        <DepositFilter />

        <DepositTable />

      </div>

    </AdminLayout>
  );
}