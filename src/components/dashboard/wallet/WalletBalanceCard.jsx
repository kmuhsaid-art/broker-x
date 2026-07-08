import { Wallet } from "lucide-react";

export default function WalletBalanceCard({
  balance = "$125,430.25",
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400">
            Total Balance
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {balance}
          </h2>

        </div>

        <div className="rounded-xl bg-yellow-500/20 p-4">

          <Wallet
            size={34}
            className="text-yellow-500"
          />

        </div>

      </div>

    </div>
  );
}