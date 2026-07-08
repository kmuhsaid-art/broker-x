export default function WalletStatusBadge({ status }) {
  const colors = {
    Active: "bg-green-500/20 text-green-400",
    Locked: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}