const news = [
  {
    title: "Bitcoin reaches new monthly high.",
    source: "Reuters",
  },
  {
    title: "Gold remains strong amid inflation.",
    source: "Bloomberg",
  },
  {
    title: "Fed expected to keep rates unchanged.",
    source: "Investing.com",
  },
];

export default function NewsFeed() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

      <h2 className="text-lg font-semibold text-white mb-5">
        News Feed
      </h2>

      <div className="space-y-4">

        {news.map((item, index) => (
          <div
            key={index}
            className="border-b border-white/5 pb-4"
          >

            <h3 className="text-white">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {item.source}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}