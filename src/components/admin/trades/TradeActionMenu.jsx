import {
  Eye,
  Ban,
} from "lucide-react";

export default function TradeActionMenu() {
  return (
    <div className="flex justify-center gap-2">

      <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
        <Eye size={18} />
      </button>

      <button className="rounded-lg bg-red-500/20 p-2 text-red-400">
        <Ban size={18} />
      </button>

    </div>
  );
}