const stats = [
  {
    title: "Pending",
    value: "31",
    color: "text-yellow-500",
  },
  {
    title: "Completed",
    value: "12,842",
    color: "text-green-500",
  },
  {
    title: "Rejected",
    value: "18",
    color: "text-red-500",
  },
  {
    title: "Today's Withdrawals",
    value: "$186,400",
    color: "text-blue-500",
  },
];

export default function WithdrawalStatistics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/5 bg-[#111827] p-6"
        >
          <p className="text-gray-400">
            {item.title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}