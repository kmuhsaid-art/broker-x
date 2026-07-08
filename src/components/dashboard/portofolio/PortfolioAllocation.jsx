import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Crypto", value: 48 },
  { name: "Gold", value: 22 },
  { name: "Forex", value: 18 },
  { name: "Cash", value: 12 },
];

const COLORS = [
  "#EAB308",
  "#3B82F6",
  "#22C55E",
  "#EF4444",
];

export default function PortfolioAllocation() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

      <h2 className="text-lg font-semibold text-white mb-5">
        Portfolio Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height={260}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            innerRadius={65}
            outerRadius={90}
          >

            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}