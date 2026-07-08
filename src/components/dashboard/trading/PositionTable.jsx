const positions = [
  {
    symbol: "BTCUSDT",
    side: "BUY",
    size: "0.42",
    entry: "108120",
    mark: "108532",
    pnl: "+172.53",
  },
  {
    symbol: "ETHUSDT",
    side: "SELL",
    size: "2.50",
    entry: "2645",
    mark: "2628",
    pnl: "+43.18",
  },
];

export default function PositionTable() {
  return (
    <div className="rounded-2xl bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold">
        Open Positions
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-sm text-gray-400">

            <th>Pair</th>
            <th>Side</th>
            <th>Size</th>
            <th>Entry</th>
            <th>Mark</th>
            <th>PnL</th>

          </tr>

        </thead>

        <tbody>

          {positions.map((position) => (

            <tr
              key={position.symbol}
              className="border-t border-white/5 h-14"
            >

              <td>{position.symbol}</td>

              <td
                className={
                  position.side === "BUY"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {position.side}
              </td>

              <td>{position.size}</td>

              <td>{position.entry}</td>

              <td>{position.mark}</td>

              <td className="text-green-500">
                {position.pnl}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}