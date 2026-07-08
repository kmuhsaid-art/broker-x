import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Globe } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Navbar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>

      <nav className="sticky top-0 z-40 bg-[#101010]/95 backdrop-blur-md border-b border-[#222]">

        <div className="max-w-7xl mx-auto h-20 px-4 lg:px-6 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-4xl font-black tracking-tight text-yellow-500"
          >
            BROKER X
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8 text-gray-300">

            <Link to="/market">Markets</Link>

            <Link to="/trade">Trade</Link>

            <Link to="/wallets">Wallet</Link>

            <Link to="/">Products</Link>

            <Link to="/">Academy</Link>

            <Link to="/">Company</Link>

          </div>

          {/* Desktop Right */}

          <div className="hidden lg:flex items-center gap-3">

            <button className="flex items-center gap-2 text-gray-300 hover:text-white">

              <Globe size={18} />

              EN

            </button>

            <Link
              to="/login"
              className="border border-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Register
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white"
          >

            <Menu size={30} />

          </button>

        </div>

      </nav>

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

    </>
  );
}