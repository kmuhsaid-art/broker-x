import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "No Data",
  description = "Nothing to display.",
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-[#111827] py-16">

      <Inbox
        size={56}
        className="text-gray-500"
      />

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-center text-gray-400">
        {description}
      </p>

    </div>
  );
}