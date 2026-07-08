import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Broker-X?",
    answer:
      "Broker-X is a multi-asset trading platform providing access to Forex, Cryptocurrencies, Precious Metals, Indices, Commodities, and Stocks through one professional account.",
  },
  {
    question: "How do I open an account?",
    answer:
      "Simply click 'Open Account', complete the registration form, verify your email, and complete identity verification (KYC) to start trading.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Yes. We use SSL encryption, cold wallet storage for digital assets, and Two-Factor Authentication (2FA) to help protect client funds and accounts.",
  },
  {
    question: "What markets can I trade?",
    answer:
      "You can trade Forex, Crypto, Gold, Silver, Commodities, Global Indices, and Stocks from a single account.",
  },
  {
    question: "How fast are withdrawals?",
    answer:
      "Withdrawal times depend on the payment method. Many requests are processed within hours, while some methods may take up to 1–3 business days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#0B1120] py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know before you start trading.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#131A29] border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-white text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`text-yellow-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">

                  <div className="border-t border-white/10 pt-5">

                    <p className="text-gray-400 leading-8">
                      {faq.answer}
                    </p>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}