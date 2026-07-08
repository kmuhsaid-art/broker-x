import {
  X,
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  GraduationCap,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition ${
          open ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-[#0B1120]
          border-r
          border-white/5
          z-50
          transition-transform
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <div className="flex items-center justify-between p-6 border-b border-white/5">

          <h1 className="text-2xl font-bold text-white">

            Broker
            <span className="text-yellow-500">
              -X
            </span>

          </h1>

          <button onClick={onClose}>

            <X className="text-white" />

          </button>

        </div>

        <nav className="p-6 space-y-3">

          <Link
            to="/market"
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-500"
          >
            <CandlestickChart size={20} />

            Markets

          </Link>

          <Link
            to="/trade"
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-500"
          >
            <LayoutDashboard size={20} />

            Trade

          </Link>

          <Link
            to="/wallets"
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-500"
          >
            <Wallet size={20} />

            Wallet

          </Link>

          <Link
            to="/academy"
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-500"
          >
            <GraduationCap size={20} />

            Academy

          </Link>

        </nav>

        <div className="absolute bottom-6 left-6 right-6 space-y-3">

          <Link
            to="/login"
            className="block text-center border border-yellow-500 rounded-xl py-3 text-yellow-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block text-center bg-yellow-500 rounded-xl py-3 text-black font-semibold"
          >
            Register
          </Link>

        </div>

      </aside>
    </>
  );
}