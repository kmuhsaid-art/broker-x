const stats = [
  {
    title: "Pending",
    value: "245",
    color: "text-yellow-500",
  },
  {
    title: "Approved",
    value: "12,452",
    color: "text-green-500",
  },
  {
    title: "Rejected",
    value: "134",
    color: "text-red-500",
  },
  {
    title: "Today's Requests",
    value: "52",
    color: "text-blue-500",
  },
];

export default function KycStatistics() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-2xl bg-[#111827] border border-white/5 p-6"
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