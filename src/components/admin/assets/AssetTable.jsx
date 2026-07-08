import AssetStatusBadge from "./AssetStatusBadge";
import AssetActionMenu from "./AssetActionMenu";

const assets = [
  {
    symbol: "BTCUSDT",
    market: "Crypto",
    leverage: "125x",
    spread: "0.01%",
    status: "Active",
  },
  {
    symbol: "ETHUSDT",
    market: "Crypto",
    leverage: "100x",
    spread: "0.02%",
    status: "Active",
  },
  {
    symbol: "EURUSD",
    market: "Forex",
    leverage: "500x",
    spread: "0.3 pip",
    status: "Active",
  },
  {
    symbol: "XAUUSD",
    market: "Gold",
    leverage: "500x",
    spread: "0.25",
    status: "Disabled",
  },
];

export default function AssetTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">

      <div className="border-b border-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">
          Trading Assets
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0F172A]">

            <tr className="text-left text-sm uppercase text-gray-400">

              <th className="p-4">Symbol</th>
              <th>Market</th>
              <th>Leverage</th>
              <th>Spread</th>
              <th>Status</th>
              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {assets.map((asset) => (

              <tr
                key={asset.symbol}
                className="border-t border-white/5 hover:bg-white/5"
              >

                <td className="p-4 font-semibold text-yellow-500">
                  {asset.symbol}
                </td>

                <td>{asset.market}</td>

                <td>{asset.leverage}</td>

                <td>{asset.spread}</td>

                <td>
                  <AssetStatusBadge status={asset.status} />
                </td>

                <td>
                  <AssetActionMenu />
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}