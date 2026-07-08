import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-[#111827] overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="text-white font-medium">
          {question}
        </h3>

        {open ? (
          <ChevronUp className="text-yellow-500" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 text-gray-400">
          {answer}
        </div>
      )}

    </div>
  );
}