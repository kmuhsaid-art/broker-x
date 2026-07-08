import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#111827] rounded-2xl border border-white/5 p-6"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            Unrealized PnL
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-2">
            +$4,812.63
          </h2>

          <p className="text-green-500 text-sm mt-2">
            ▲ +3.84% Today
          </p>

        </div>

        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
          <TrendingUp
            size={28}
            className="text-green-500"
          />
        </div>

      </div>
    </motion.div>
  );
}