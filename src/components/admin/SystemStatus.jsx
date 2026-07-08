const status = [
  {
    service: "API Server",
    state: "Online",
  },
  {
    service: "Trading Engine",
    state: "Online",
  },
  {
    service: "Database",
    state: "Online",
  },
  {
    service: "Mail Server",
    state: "Maintenance",
  },
];

export default function SystemStatus() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-semibold">
        System Status
      </h2>

      <div className="space-y-4">

        {status.map((item) => (

          <div
            key={item.service}
            className="flex items-center justify-between"
          >

            <span>{item.service}</span>

            <span
              className={`rounded-full px-3 py-1 text-xs ${
                item.state === "Online"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {item.state}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}