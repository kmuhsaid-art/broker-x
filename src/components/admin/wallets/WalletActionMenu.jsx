import { Eye, Lock, Unlock } from "lucide-react";

export default function WalletActionMenu() {
  return (
    <div className="flex justify-center gap-2">

      <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
        <Eye size={18} />
      </button>

      <button className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400">
        <Lock size={18} />
      </button>

      <button className="rounded-lg bg-green-500/20 p-2 text-green-400">
        <Unlock size={18} />
      </button>

    </div>
  );
}