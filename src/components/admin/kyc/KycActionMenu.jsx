import {
  Eye,
  Check,
  X,
} from "lucide-react";

export default function KycActionMenu() {
  return (

    <div className="flex justify-center gap-2">

      <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400">

        <Eye size={18} />

      </button>

      <button className="rounded-lg bg-green-500/20 p-2 text-green-400">

        <Check size={18} />

      </button>

      <button className="rounded-lg bg-red-500/20 p-2 text-red-400">

        <X size={18} />

      </button>

    </div>

  );
}