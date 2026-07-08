const events = [
  {
    time: "08:30",
    event: "US CPI",
    impact: "High",
  },
  {
    time: "14:00",
    event: "ECB Speech",
    impact: "Medium",
  },
  {
    time: "20:00",
    event: "FOMC Minutes",
    impact: "High",
  },
];

export default function EconomicCalendar() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

      <h2 className="text-lg font-semibold text-white mb-5">
        Economic Calendar
      </h2>

      <div className="space-y-4">

        {events.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-white/5 pb-3"
          >

            <div>

              <p className="text-white">
                {item.event}
              </p>

              <p className="text-sm text-gray-400">
                {item.time}
              </p>

            </div>

            <span
              className={`font-semibold ${
                item.impact === "High"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {item.impact}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}