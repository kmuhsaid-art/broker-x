const stats = [
  {
    title: "Total Users",
    value: "1,842,556",
  },
  {
    title: "Verified",
    value: "1,624,221",
  },
  {
    title: "Pending KYC",
    value: "18,945",
  },
  {
    title: "Blocked",
    value: "612",
  },
];

export default function UserStatistics() {
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

          <h2 className="mt-2 text-3xl font-bold text-white">
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}