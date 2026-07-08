const performance = [
  { month: "Jan", profit: "+2.5%" },
  { month: "Feb", profit: "+4.8%" },
  { month: "Mar", profit: "-1.2%" },
  { month: "Apr", profit: "+6.4%" },
  { month: "May", profit: "+3.9%" },
  { month: "Jun", profit: "+7.5%" },
];

export default function PortfolioPerformance() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Portfolio Performance
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left text-gray-400">
            <th>Month</th>
            <th>Return</th>
          </tr>
        </thead>

        <tbody>

          {performance.map((item) => (

            <tr
              key={item.month}
              className="border-t border-white/5 h-12"
            >

              <td>{item.month}</td>

              <td
                className={
                  item.profit.includes("-")
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {item.profit}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}