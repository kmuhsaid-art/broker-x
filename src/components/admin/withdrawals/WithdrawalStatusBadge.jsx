export default function WithdrawalStatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-500/20 text-yellow-400",
    Completed: "bg-green-500/20 text-green-400",
    Rejected: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}