const tabs = [
  "BTC/USD",
  "ETH/USD",
  "XAU/USD",
  "EUR/USD",
  "NAS100",
];

export default function ChartTabs({
  active,
  setActive,
}) {
  return (
    <div className="flex gap-4 flex-wrap mb-8">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`

          px-5
          py-3
          rounded-xl
          transition

          ${
            active === tab
              ? "bg-yellow-500 text-black"
              : "bg-[#131A29] text-gray-300"
          }

          `}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}