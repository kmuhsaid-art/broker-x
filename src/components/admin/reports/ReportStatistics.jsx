const stats = [
  {
    title: "Today's Revenue",
    value: "$248,530",
    color: "text-green-500",
  },
  {
    title: "Trading Volume",
    value: "$12.6M",
    color: "text-blue-500",
  },
  {
    title: "New Users",
    value: "326",
    color: "text-yellow-500",
  },
  {
    title: "Net Profit",
    value: "$1.82M",
    color: "text-purple-500",
  },
];

export default function ReportStatistics() {
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