import {
  Bitcoin,
  ChartCandlestick,
  Landmark,
  BarChart3,
  Gem,
  Fuel,
} from "lucide-react";

export const products = [
  {
    id: 1,
    title: "Crypto",
    icon: Bitcoin,
    description: "Trade Bitcoin, Ethereum, Solana, XRP and hundreds of digital assets.",
    color: "text-yellow-500",
  },
  {
    id: 2,
    title: "Forex",
    icon: Landmark,
    description: "Trade major, minor and exotic currency pairs with tight spreads.",
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Stocks",
    icon: ChartCandlestick,
    description: "Invest in Apple, Tesla, Nvidia, Microsoft and global companies.",
    color: "text-blue-400",
  },
  {
    id: 4,
    title: "Indices",
    icon: BarChart3,
    description: "Trade US30, NAS100, SPX500 and leading world indices.",
    color: "text-purple-400",
  },
  {
    id: 5,
    title: "Metals",
    icon: Gem,
    description: "Trade Gold, Silver and other precious metals with confidence.",
    color: "text-orange-400",
  },
  {
    id: 6,
    title: "Commodities",
    icon: Fuel,
    description: "Access Oil, Natural Gas and global commodity markets.",
    color: "text-red-400",
  },
];