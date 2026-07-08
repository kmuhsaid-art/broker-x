import ReportStatusBadge from "./ReportStatusBadge";
import ReportActionMenu from "./ReportActionMenu";

const reports = [
  {
    id: "RPT000001",
    type: "Daily",
    generated: "2026-06-29",
    records: "8,254",
    size: "3.2 MB",
    status: "Completed",
  },
  {
    id: "RPT000002",
    type: "Monthly",
    generated: "2026-06-28",
    records: "285,124",
    size: "24.5 MB",
    status: "Completed",
  },
  {
    id: "RPT000003",
    type: "Yearly",
    generated: "2026-06-27",
    records: "2,842,510",
    size: "158 MB",
    status: "Processing",
  },
];

export default function ReportTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">

      <div className="border-b border-white/5 p-6">

        <h2 className="text-xl font-semibold text-white">
          Generated Reports
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0F172A]">

            <tr className="text-left text-sm uppercase text-gray-400">

              <th className="p-4">Report ID</th>
              <th>Type</th>
              <th>Generated</th>
              <th>Records</th>
              <th>File Size</th>
              <th>Status</th>
              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report) => (

              <tr
                key={report.id}
                className="border-t border-white/5 hover:bg-white/5"
              >

                <td className="p-4 font-medium text-yellow-500">
                  {report.id}
                </td>

                <td>{report.type}</td>

                <td>{report.generated}</td>

                <td>{report.records}</td>

                <td>{report.size}</td>

                <td>
                  <ReportStatusBadge status={report.status} />
                </td>

                <td>
                  <ReportActionMenu />
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}