import TradingChart from "./TradingChart";
import OrderBook from "./OrderBook";
import RecentTrades from "./RecentTrades";
import TradePanel from "./TradePanel";

export default function TradingWorkspace() {

    return (

        <div className="space-y-6">

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 xl:col-span-8">

                    <TradingChart />

                </div>

                <div className="col-span-12 xl:col-span-4">

                    <OrderBook />

                </div>

            </div>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 xl:col-span-8">

                    <RecentTrades />

                </div>

                <div className="col-span-12 xl:col-span-4">

                    <TradePanel />

                </div>

            </div>

        </div>

    );

}