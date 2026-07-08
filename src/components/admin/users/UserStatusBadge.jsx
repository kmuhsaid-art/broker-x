export default function UserStatusBadge({ status }) {
  const colors = {
    Active: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Suspended: "bg-red-500/20 text-red-400",
    Blocked: "bg-red-500/20 text-red-400",
    Verified: "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[status] ||
        "bg-gray-500/20 text-gray-300"
      }`}
    >
      {status}
    </span>
  );
}