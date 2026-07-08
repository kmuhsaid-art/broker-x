export default function ReportStatusBadge({ status }) {
  const colors = {
    Completed: "bg-green-500/20 text-green-400",
    Processing: "bg-yellow-500/20 text-yellow-400",
    Failed: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}