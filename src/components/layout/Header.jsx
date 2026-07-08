import {
  Headphones,
  Mail,
  Smartphone,
  Globe,
  Bell,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#080D18] border-b border-white/5 text-xs text-gray-400">

      <div className="max-w-7xl mx-auto h-10 px-4 lg:px-6 flex items-center justify-between">

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between w-full">

          <div className="flex items-center gap-2">
            <Headphones size={14} />
            <span>24/7 Support</span>
          </div>

          <button className="flex items-center gap-1 hover:text-white transition">
            <Globe size={14} />
            EN
          </button>

        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between w-full">

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <Headphones size={14} />
              <span>24/7 Support</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>support@broker-x.com</span>
            </div>

          </div>

          <div className="flex items-center gap-6">

            <button className="flex items-center gap-2 hover:text-white transition">
              <Bell size={14} />
              Announcement
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Smartphone size={14} />
              App
            </button>

            <button className="flex items-center gap-2 hover:text-white transition">
              <Globe size={14} />
              EN
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}