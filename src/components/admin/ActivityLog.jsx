const logs = [
  {
    user: "John Doe",
    action: "New Deposit",
    time: "2 min ago",
  },
  {
    user: "Michael",
    action: "Approved KYC",
    time: "8 min ago",
  },
  {
    user: "Sophia",
    action: "Withdraw Request",
    time: "15 min ago",
  },
  {
    user: "Admin",
    action: "Updated Settings",
    time: "1 hour ago",
  },
];

export default function ActivityLog() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Activity Log
      </h2>

      <div className="space-y-5">

        {logs.map((log, index) => (

          <div
            key={index}
            className="border-b border-white/5 pb-4"
          >

            <p className="font-medium text-white">
              {log.user}
            </p>

            <p className="text-sm text-gray-400">
              {log.action}
            </p>

            <span className="text-xs text-gray-500">
              {log.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}