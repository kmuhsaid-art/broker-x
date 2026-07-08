import AdminLayout from "../../components/admin/AdminLayout";

import UserStatistics from "../../components/admin/users/UserStatistics";
import UserFilters from "../../components/admin/users/UserFilters";
import UserTable from "../../components/admin/users/UserTable";

export default function Users() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-white">
            User Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all registered users.
          </p>

        </div>

        <UserStatistics />

        <UserFilters />

        <UserTable />

      </div>

    </AdminLayout>
  );
}