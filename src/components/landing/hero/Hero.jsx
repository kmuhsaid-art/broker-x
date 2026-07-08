import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-[#0B1120] min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <HeroContent />

        <HeroImage />
      </div>
    </motion.section>
  );
}