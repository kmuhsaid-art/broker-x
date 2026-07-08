import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Markets",
    icon: CandlestickChart,
    path: "/market",
  },
  {
    name: "Trade",
    icon: CandlestickChart,
    path: "/trade",
  },
  {
    name: "Wallet",
    icon: Wallet,
    path: "/wallet",
  },
  {
    name: "Deposit",
    icon: ArrowDownCircle,
    path: "/deposit",
  },
  {
    name: "Withdraw",
    icon: ArrowUpCircle,
    path: "/withdraw",
  },
  {
    name: "History",
    icon: History,
    path: "/history",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <aside className="w-64 min-h-screen bg-[#0B1120] border-r border-white/5 flex flex-col">

      <div className="px-6 py-5 border-b border-white/5">

        <h1 className="text-2xl font-bold text-white">
          Broker<span className="text-yellow-500">-X</span>
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Professional Trading Platform
        </p>

      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{menu.name}</span>

            </NavLink>
          );

        })}

      </nav>

      <div className="p-4 border-t border-white/5">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
        >
          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}