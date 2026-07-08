const stats = [
  {
    title: "Total Wallets",
    value: "24,315",
    color: "text-blue-500",
  },
  {
    title: "Total Balance",
    value: "$86.4M",
    color: "text-green-500",
  },
  {
    title: "Locked Funds",
    value: "$4.8M",
    color: "text-yellow-500",
  },
  {
    title: "Active Assets",
    value: "128",
    color: "text-purple-500",
  },
];

export default function WalletStatistics() {
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