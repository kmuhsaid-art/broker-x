import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#081018] text-white">

      <AdminSidebar />

      <div className="lg:ml-72">

        <AdminTopbar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}