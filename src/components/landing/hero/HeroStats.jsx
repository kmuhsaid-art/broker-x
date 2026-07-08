const stats = [
  {
    value: "1.8M+",
    label: "Active Traders",
  },
  {
    value: "150+",
    label: "Countries",
  },
  {
    value: "$23B",
    label: "Monthly Volume",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-16">

      {stats.map((item) => (

        <div key={item.label}>

          <h2 className="text-3xl font-bold text-white">
            {item.value}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.label}
          </p>

        </div>

      ))}

    </div>
  );
}