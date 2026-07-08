export default function ReportFilter() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="grid gap-4 lg:grid-cols-4">

        <select className="rounded-xl border border-white/10 bg-[#0F172A] px-4">

          <option>Daily Report</option>
          <option>Weekly Report</option>
          <option>Monthly Report</option>
          <option>Yearly Report</option>

        </select>

        <input
          type="date"
          className="rounded-xl border border-white/10 bg-[#0F172A] px-4"
        />

        <input
          type="date"
          className="rounded-xl border border-white/10 bg-[#0F172A] px-4"
        />

        <button className="rounded-xl bg-yellow-500 font-semibold text-black">
          Generate Report
        </button>

      </div>

    </div>
  );
}