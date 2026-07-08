import StatCard from "./StatCard";

const stats = [
  {
    end: 1.8,
    suffix: "M+",
    decimals: 1,
    title: "Active Traders",
    color: "text-white",
  },
  {
    end: 23,
    prefix: "$",
    suffix: "B",
    title: "Monthly Volume",
    color: "text-yellow-500",
  },
  {
    end: 150,
    suffix: "+",
    title: "Countries",
    color: "text-green-400",
  },
  {
    end: 99.99,
    suffix: "%",
    decimals: 2,
    title: "Platform Uptime",
    color: "text-blue-400",
  },
];

export default function Statistics() {
    return (
        <section className="py-24 bg-[#081018]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item) => (
                         <StatCard
                          key={item.title}
                           {...item}
                       />
                    ))}

                </div>

            </div>

        </section>
    );
}