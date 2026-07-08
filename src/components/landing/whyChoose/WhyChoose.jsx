import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#081018]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-500 text-sm">
            Why Broker-X
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Built For Professional Traders
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Broker-X combines institutional-grade technology,
            advanced security and global market access into one
            powerful trading platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}