const stats = [
  {
    title: "Open Trades",
    value: "8,521",
    color: "text-yellow-500",
  },
  {
    title: "Closed Today",
    value: "2,341",
    color: "text-green-500",
  },
  {
    title: "Total Volume",
    value: "$12.8M",
    color: "text-blue-500",
  },
  {
    title: "Profit Today",
    value: "$482K",
    color: "text-purple-500",
  },
];

export default function TradeStatistics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/5 bg-[#111827] p-6"
        >
          <p className="text-gray-400">{item.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}