const orders = [
  {
    id: "100201",
    pair: "BTCUSDT",
    type: "Limit",
    side: "BUY",
    amount: "0.50",
    status: "Filled",
  },
  {
    id: "100202",
    pair: "ETHUSDT",
    type: "Market",
    side: "SELL",
    amount: "2.10",
    status: "Filled",
  },
  {
    id: "100203",
    pair: "XAUUSD",
    type: "Limit",
    side: "BUY",
    amount: "1.00",
    status: "Pending",
  },
];

export default function OrderHistory() {
  return (
    <div className="rounded-2xl bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold">
        Order History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-sm text-gray-400">

            <th>ID</th>
            <th>Pair</th>
            <th>Type</th>
            <th>Side</th>
            <th>Amount</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-t border-white/5 h-14"
            >

              <td>{order.id}</td>

              <td>{order.pair}</td>

              <td>{order.type}</td>

              <td
                className={
                  order.side === "BUY"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {order.side}
              </td>

              <td>{order.amount}</td>

              <td>{order.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}