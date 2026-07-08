import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    country: "Singapore",
    review:
      "Broker-X has transformed my trading experience. Fast execution, competitive spreads, and an excellent trading platform.",
  },
  {
    name: "Sarah Johnson",
    role: "Forex Trader",
    country: "United Kingdom",
    review:
      "Withdrawals are processed quickly, and the interface is clean and easy to use. I highly recommend Broker-X.",
  },
  {
    name: "David Miller",
    role: "Crypto Investor",
    country: "Australia",
    review:
      "One of the best trading platforms I've ever used. The market execution is incredibly smooth.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-yellow-500 text-sm">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            Trusted by Traders Around the World
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Thousands of traders choose Broker-X every day for reliability,
            speed, and professional trading tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#131A29]
                border border-white/10
                rounded-3xl
                p-8
                hover:border-yellow-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#EAB308"
                    className="text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h3 className="text-white font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-yellow-500">
                  {item.role}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.country}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}