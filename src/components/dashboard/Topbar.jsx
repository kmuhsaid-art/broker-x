import { Bell, Search } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function Topbar() {

    const { user, logout } = useAuth();

    return (

        <header className="h-16 border-b border-white/10 bg-[#111827] flex items-center justify-between px-6">

            <div className="flex items-center gap-4">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                            pl-10
                            pr-4
                            py-2
                            w-80
                            rounded-xl
                            bg-[#1f2937]
                            border
                            border-white/10
                            text-white
                            outline-none
                            focus:border-yellow-500
                        "
                    />

                </div>

            </div>

            <div className="flex items-center gap-5">

                <button className="relative">

                    <Bell className="text-gray-300" />

                </button>

                <div className="text-right">

                    <p className="text-white font-semibold">

                        {user?.name ?? "User"}

                    </p>

                    <p className="text-xs text-gray-400">

                        {user?.email}

                    </p>

                </div>

                <button
                    onClick={logout}
                    className="
                        px-4
                        py-2
                        rounded-lg
                        bg-red-500
                        text-white
                        hover:bg-red-600
                    "
                >
                    Logout
                </button>

            </div>

        </header>

    );

}