const transactions = [
  {
    id: "TX10001",
    type: "Deposit",
    asset: "USDT",
    amount: "5000",
    status: "Completed",
  },
  {
    id: "TX10002",
    type: "Withdrawal",
    asset: "BTC",
    amount: "0.15",
    status: "Pending",
  },
  {
    id: "TX10003",
    type: "Deposit",
    asset: "ETH",
    amount: "5.00",
    status: "Completed",
  },
];

export default function TransactionHistory() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Transaction History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400">

            <th>ID</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Amount</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((tx) => (

            <tr
              key={tx.id}
              className="border-t border-white/5 h-14"
            >

              <td>{tx.id}</td>

              <td>{tx.type}</td>

              <td>{tx.asset}</td>

              <td>{tx.amount}</td>

              <td
                className={
                  tx.status === "Completed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }
              >
                {tx.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}