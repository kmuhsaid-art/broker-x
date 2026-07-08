export default function UserTradingCard() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">

        Trading Summary

      </h2>

      <div className="space-y-4">

        <Row title="Open Positions" value="12" />

        <Row title="Closed Orders" value="286" />

        <Row title="Win Rate" value="74%" />

        <Row title="Total Profit" value="$14,250" />

      </div>

    </div>
  );
}

function Row({ title, value }) {
  return (
    <div className="flex justify-between">

      <span className="text-gray-400">
        {title}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}