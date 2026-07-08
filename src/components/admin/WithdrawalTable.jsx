const withdrawals = [
  {
    id: 1,
    user: "Michael",
    amount: "$1,500",
    status: "Pending",
  },
  {
    id: 2,
    user: "Daniel",
    amount: "$8,200",
    status: "Completed",
  },
];

export default function WithdrawalTable() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Withdrawals
      </h2>

      <div className="space-y-4">

        {withdrawals.map((item) => (

          <div
            key={item.id}
            className="flex justify-between border-b border-white/5 pb-3"
          >

            <span>{item.user}</span>

            <span>{item.amount}</span>

            <span
              className={
                item.status === "Completed"
                  ? "text-green-400"
                  : "text-yellow-400"
              }
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}