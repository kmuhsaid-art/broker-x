import AdminLayout from "../../components/admin/AdminLayout";
import TradeStatistics from "../../components/admin/trades/TradeStatistics";
import TradeFilter from "../../components/admin/trades/TradeFilter";
import TradeTable from "../../components/admin/trades/TradeTable";

export default function Trades() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Trade Management
        </h1>

        <TradeStatistics />

        <TradeFilter />

        <TradeTable />

      </div>

    </AdminLayout>
  );
}