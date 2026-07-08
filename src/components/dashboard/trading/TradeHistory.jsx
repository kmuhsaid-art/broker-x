const trades = [
  {
    time: "10:30",
    pair: "BTCUSDT",
    type: "BUY",
    price: "104000",
    qty: "0.01",
    profit: "+45",
  },
];

export default function TradeHistory() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">

      <h2 className="text-white font-semibold mb-5">
        Trade History
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">

          <tr>

            <th>Time</th>

            <th>Pair</th>

            <th>Type</th>

            <th>Price</th>

            <th>Qty</th>

            <th>Profit</th>

          </tr>

        </thead>

        <tbody>

          {trades.map((trade, index) => (
            <tr
              key={index}
              className="border-t border-white/5"
            >

              <td className="py-3">{trade.time}</td>

              <td>{trade.pair}</td>

              <td>{trade.type}</td>

              <td>{trade.price}</td>

              <td>{trade.qty}</td>

              <td className="text-green-400">
                {trade.profit}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}