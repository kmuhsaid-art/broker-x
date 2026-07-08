const orders = [
  {
    symbol: "BTCUSDT",
    side: "BUY",
    price: "104200",
    amount: "0.01",
    status: "Open",
  },
];

export default function OpenOrders() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-5">

      <h2 className="text-white font-semibold mb-5">
        Open Orders
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">

          <tr>

            <th className="text-left py-2">Pair</th>

            <th>Side</th>

            <th>Price</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <tr key={order.symbol} className="border-t border-white/5">

              <td className="py-3">{order.symbol}</td>

              <td>{order.side}</td>

              <td>{order.price}</td>

              <td>{order.amount}</td>

              <td className="text-yellow-400">
                {order.status}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}