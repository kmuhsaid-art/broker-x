import AdminLayout from "../../components/admin/AdminLayout";
import WithdrawalStatistics from "../../components/admin/withdrawals/WithdrawalStatistics";
import WithdrawalFilter from "../../components/admin/withdrawals/WithdrawalFilter";
import WithdrawalTable from "../../components/admin/withdrawals/WithdrawalTable";

export default function Withdrawals() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Withdrawal Management
        </h1>

        <WithdrawalStatistics />

        <WithdrawalFilter />

        <WithdrawalTable />

      </div>

    </AdminLayout>
  );
}