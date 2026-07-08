import {
  Users,
  Wallet,
  CandlestickChart,
  DollarSign,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

import DashboardCard from "../../components/admin/DashboardCard";
import StatisticsCard from "../../components/admin/StatisticsCard";
import RevenueChart from "../../components/admin/RevenueChart";
import ActivityLog from "../../components/admin/ActivityLog";
import UserTable from "../../components/admin/users/UserTable";
import TradeTable from "../../components/admin/trades/TradeTable";
import SystemStatus from "../../components/admin/SystemStatus";

export default function AdminDashboard() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            Broker-X Administration Panel
          </p>

        </div>

        {/* Dashboard Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Total Users"
            value="1,842,556"
            icon={Users}
          />

          <DashboardCard
            title="Wallet Balance"
            value="$23.6M"
            icon={Wallet}
            color="text-green-500"
          />

          <DashboardCard
            title="Open Trades"
            value="8,231"
            icon={CandlestickChart}
            color="text-blue-500"
          />

          <DashboardCard
            title="Today's Revenue"
            value="$248,500"
            icon={DollarSign}
            color="text-yellow-500"
          />

        </div>

        {/* Statistics */}

        <div className="grid gap-6 lg:grid-cols-4">

          <StatisticsCard
            title="New Users"
            value="1,240"
            change="+12.4%"
          />

          <StatisticsCard
            title="Deposits"
            value="$2.4M"
            change="+8.1%"
          />

          <StatisticsCard
            title="Withdrawals"
            value="$640K"
            change="-2.3%"
          />

          <StatisticsCard
            title="Trades"
            value="24,532"
            change="+15.6%"
          />

        </div>

        {/* Chart */}

        <RevenueChart />

        {/* Tables */}

        <div className="grid gap-6 xl:grid-cols-2">

          <UserTable />

          <TradeTable />

        </div>

        {/* Bottom */}

        <div className="grid gap-6 xl:grid-cols-2">

          <ActivityLog />

          <SystemStatus />

        </div>

      </div>

    </AdminLayout>
  );
}