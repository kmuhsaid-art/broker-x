import DashboardLayout from "../components/dashboard/DashboardLayout";

import BalanceCard from "../components/dashboard/cards/BalanceCard";
import WalletCard from "../components/dashboard/cards/WalletCard";
import OverviewCard from "../components/dashboard/cards/OverviewCard";

import NotificationsCard from "../components/dashboard/cards/NotificationsCard";
import PriceAlerts from "../components/dashboard/cards/PriceAlerts";
import EconomicCalendar from "../components/dashboard/cards/EconomicCalendar";
import NewsFeed from "../components/dashboard/cards/NewsFeed";

import TradingWorkspace from "../components/dashboard/trading/TradingWorkspace";

import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {

    const {

        dashboard,

        loading,

        error,

    } = useDashboard();

    if (loading) {

        return (

            <DashboardLayout>

                <div className="text-white text-xl">

                    Loading Dashboard...

                </div>

            </DashboardLayout>

        );

    }

    if (error) {

        return (

            <DashboardLayout>

                <div className="text-red-500 text-xl">

                    Failed loading dashboard.

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <BalanceCard data={dashboard} />

                <WalletCard data={dashboard} />

                <OverviewCard data={dashboard} />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

                <NotificationsCard data={dashboard} />

                <PriceAlerts data={dashboard} />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

                <EconomicCalendar data={dashboard} />

                <NewsFeed data={dashboard} />

            </div>

            <div className="mt-6">

                <TradingWorkspace data={dashboard} />

            </div>

        </DashboardLayout>

    );

}