const categories = [
  "All",
  "Crypto",
  "Forex",
  "Gold",
  "Indices",
  "Stocks",
];

export default function MarketFilters({
  active,
  setActive,
}) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setActive(item)}
          className={`

          px-5

          py-2

          rounded-full

          transition

          ${
            active === item
              ? "bg-yellow-500 text-black"
              : "bg-[#131A29] text-gray-300"
          }

          `}
        >
          {item}
        </button>

      ))}

    </div>
  );
}