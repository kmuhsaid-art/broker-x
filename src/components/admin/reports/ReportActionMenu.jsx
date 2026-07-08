import {
  Eye,
  Download,
} from "lucide-react";

export default function ReportActionMenu() {
  return (
    <div className="flex justify-center gap-2">

      <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
        <Eye size={18} />
      </button>

      <button className="rounded-lg bg-green-500/20 p-2 text-green-400">
        <Download size={18} />
      </button>

    </div>
  );
}