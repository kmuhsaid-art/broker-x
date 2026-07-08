export default function MarketSearch({
  search,
  setSearch,
}) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search symbol..."
      className="
      w-full
      bg-[#131A29]
      border
      border-white/10
      rounded-xl
      px-5
      py-4
      text-white
      outline-none
      focus:border-yellow-500
      "
    />
  );
}