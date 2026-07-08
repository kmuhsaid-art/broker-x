import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 30000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Revenue
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#EAB308"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}