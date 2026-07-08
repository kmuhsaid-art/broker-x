import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  CandlestickChart,
} from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        x: 80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* isi HeroImage yang sudah kita buat sebelumnya */}
    </motion.div>
  );
}