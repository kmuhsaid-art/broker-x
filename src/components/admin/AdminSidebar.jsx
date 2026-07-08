import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  CandlestickChart,
  FileText,
  Bell,
  Settings,
  LogOut,
  Boxes,
  BarChart3,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
  title: "Assets",
  path: "/admin/assets",
  icon: Boxes,
},
  {
    title: "Users",
    icon: Users,
    path: "/admin/users",
  },
  {
    title: "KYC",
    icon: ShieldCheck,
    path: "/admin/kyc",
  },
  {
    title: "Wallet",
    icon: Wallet,
    path: "/admin/wallet",
  },
  {
    title: "Deposits",
    icon: ArrowDownToLine,
    path: "/admin/deposits",
  },
  {
    title: "Withdrawals",
    icon: ArrowUpFromLine,
    path: "/admin/withdrawals",
  },
  {
    title: "Trades",
    icon: CandlestickChart,
    path: "/admin/trades",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/admin/reports",
  },
  {
    title: "Notifications",
    icon: Bell,
    path: "/admin/notifications",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/5 bg-[#0F172A]">

      <div className="border-b border-white/5 p-6">

        <h1 className="text-2xl font-bold text-yellow-500">
          Broker-X
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Admin Panel
        </p>

      </div>

      <nav className="space-y-2 p-4">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.title}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-yellow-500 text-black"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{menu.title}</span>
              {
menu.badge && (

<span
className="
ml-auto
rounded-full
bg-yellow-500
px-2
py-1
text-xs
font-semibold
text-black
"
>
{menu.badge}
</span>

)
},
            </NavLink>
          );
        })}

      </nav>

      <div className="absolute bottom-0 w-full border-t border-white/5 p-4">

        <button
          className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-red-400
          transition
          hover:bg-red-500/10
          "
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}