const cards = [
  {
    title: "Total Balance",
    value: "$125,840.56",
  },
  {
    title: "Available",
    value: "$98,520.31",
  },
  {
    title: "Margin Used",
    value: "$17,250.00",
  },
  {
    title: "Profit / Loss",
    value: "+$10,070.25",
  },
];

export default function WalletSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border border-white/5 bg-[#111827] p-6"
        >

          <p className="text-gray-400">
            {card.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}