const history = [
  {
    date: "2026-06-28",
    ip: "103.xxx.xxx.xxx",
    device: "Chrome / Windows",
  },
  {
    date: "2026-06-27",
    ip: "103.xxx.xxx.xxx",
    device: "Safari / iPhone",
  },
];

export default function UserLoginHistory() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">

        Login History

      </h2>

      <div className="space-y-4">

        {history.map((item, index) => (

          <div
            key={index}
            className="flex justify-between border-b border-white/5 pb-3"
          >

            <span>{item.date}</span>

            <span>{item.device}</span>

            <span>{item.ip}</span>

          </div>

        ))}

      </div>

    </div>
  );
}