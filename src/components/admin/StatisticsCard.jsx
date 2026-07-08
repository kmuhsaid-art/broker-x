export default function StatisticsCard({
  title,
  value,
  change,
}) {
  const positive = change?.startsWith("+");

  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <p className="text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

      <span
        className={`mt-3 inline-block text-sm font-medium ${
          positive
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {change}
      </span>

    </div>
  );
}