import {
  Eye,
  Pencil,
  Ban,
  Trash2,
} from "lucide-react";

export default function UserActionMenu() {
  return (
    <div className="flex items-center justify-center gap-2">

      <button
        className="
        rounded-lg
        bg-blue-500/10
        p-2
        text-blue-400
        hover:bg-blue-500/20
        "
      >
        <Eye size={18} />
      </button>

      <button
        className="
        rounded-lg
        bg-yellow-500/10
        p-2
        text-yellow-400
        hover:bg-yellow-500/20
        "
      >
        <Pencil size={18} />
      </button>

      <button
        className="
        rounded-lg
        bg-red-500/10
        p-2
        text-red-400
        hover:bg-red-500/20
        "
      >
        <Ban size={18} />
      </button>

      <button
        className="
        rounded-lg
        bg-red-600/10
        p-2
        text-red-500
        hover:bg-red-600/20
        "
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}