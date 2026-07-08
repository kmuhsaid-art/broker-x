import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function AssetActionMenu() {
  return (
    <div className="flex justify-center gap-2">

      <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
        <Eye size={18} />
      </button>

      <button className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400">
        <Pencil size={18} />
      </button>

      <button className="rounded-lg bg-red-500/20 p-2 text-red-400">
        <Trash2 size={18} />
      </button>

    </div>
  );
}