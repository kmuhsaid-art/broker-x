import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#081018]">

      <Sidebar />

      <div className="lg:ml-72">

        <Topbar />

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>
  );
}