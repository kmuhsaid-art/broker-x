export default function TradeTypeBadge({ type }) {
  const colors = {
    Buy: "bg-green-500/20 text-green-400",
    Sell: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[type]}`}
    >
      {type}
    </span>
  );
}