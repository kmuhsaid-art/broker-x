const deposits = [
  {
    id: 1,
    user: "John Doe",
    amount: "$5,000",
    method: "USDT",
    status: "Completed",
  },
  {
    id: 2,
    user: "Sophia",
    amount: "$2,000",
    method: "BTC",
    status: "Pending",
  },
];

export default function DepositTable() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Deposits
      </h2>

      <div className="space-y-4">

        {deposits.map((item) => (

          <div
            key={item.id}
            className="flex justify-between border-b border-white/5 pb-3"
          >

            <div>

              <p>{item.user}</p>

              <span className="text-sm text-gray-400">
                {item.method}
              </span>

            </div>

            <div className="text-right">

              <p>{item.amount}</p>

              <span className="text-green-400">
                {item.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}