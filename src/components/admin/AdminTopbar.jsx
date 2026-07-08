import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/5 bg-[#0F172A]/90 px-6 backdrop-blur">

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-white/10 bg-[#111827] py-3 pl-11 pr-4 outline-none focus:border-yellow-500"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell className="text-gray-300" />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <div className="flex items-center gap-3">

          <UserCircle size={38} />

          <div>

            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-sm text-gray-400">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}