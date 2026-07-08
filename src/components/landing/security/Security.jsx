import {
  ShieldCheck,
  Lock,
  Fingerprint,
  ServerCog,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Multi-Layer Security",
    description:
      "Enterprise-grade infrastructure with multiple layers of protection for every account.",
  },
  {
    icon: Lock,
    title: "Cold Wallet Storage",
    description:
      "Most client assets are stored offline in secure cold wallets to minimize risk.",
  },
  {
    icon: Fingerprint,
    title: "Two-Factor Authentication",
    description:
      "Protect your account using Google Authenticator and advanced verification methods.",
  },
  {
    icon: ServerCog,
    title: "Encrypted Infrastructure",
    description:
      "All communications are protected with SSL encryption and secure server architecture.",
  },
];

export default function Security() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-yellow-500 text-sm">
            Security
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            Your Funds Are Protected
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Security is our top priority. Broker-X is built with modern
            technologies to safeguard your assets and personal information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {securityFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#131A29]
                  border border-white/10
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-500
                "
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Icon className="text-yellow-500" size={32} />
                </div>

                <h3 className="text-white text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}