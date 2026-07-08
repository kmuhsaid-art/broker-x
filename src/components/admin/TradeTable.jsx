const trades = [
  {
    id: 1,
    pair: "BTC/USDT",
    type: "Buy",
    volume: "0.52",
    pnl: "+$245",
  },
  {
    id: 2,
    pair: "XAU/USD",
    type: "Sell",
    volume: "2.10",
    pnl: "-$120",
  },
];

export default function TradeTable() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] overflow-hidden">

      <div className="p-6 border-b border-white/5">

        <h2 className="text-xl font-semibold">
          Recent Trades
        </h2>

      </div>

      <table className="w-full">

        <thead className="bg-[#0F172A]">

          <tr>

            <th className="p-4 text-left">
              Pair
            </th>

            <th className="text-left">
              Type
            </th>

            <th className="text-left">
              Volume
            </th>

            <th className="text-left">
              P/L
            </th>

          </tr>

        </thead>

        <tbody>

          {trades.map((trade) => (

            <tr
              key={trade.id}
              className="border-t border-white/5"
            >

              <td className="p-4">
                {trade.pair}
              </td>

              <td>{trade.type}</td>

              <td>{trade.volume}</td>

              <td
                className={
                  trade.pnl.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {trade.pnl}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}