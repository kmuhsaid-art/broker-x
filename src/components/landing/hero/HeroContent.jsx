import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        x: -80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-semibold">
        🚀 Trusted by Traders Worldwide
      </span>

      <h1 className="text-6xl lg:text-7xl font-black text-white mt-8 leading-tight">
        Trade
        <span className="text-yellow-500"> Everything.</span>
        <br />
        Anywhere.
      </h1>

      <p className="text-gray-400 text-xl mt-8 leading-9 max-w-xl">
        Access Crypto, Forex, Stocks, Indices,
        Commodities and Precious Metals
        from one professional platform.
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}