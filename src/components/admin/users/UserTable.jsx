import { useMemo } from "react";
import useUsers from "../../../hooks/useUsers";
import UserStatusBadge from "./UserStatusBadge";
import UserActionMenu from "./UserActionMenu";

export default function UserTable() {
  const { users, loading } = useUsers();

  const rows = useMemo(() => {
    if (Array.isArray(users)) return users;
    if (Array.isArray(users?.data)) return users.data;
    return [];
  }, [users]);

  if (loading) {
    return (
      <div className="rounded-2xl bg-[#111827] p-8 text-center">
        Loading users...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">

      <table className="w-full">

        <thead className="bg-[#0F172A]">

          <tr className="text-left text-sm uppercase text-gray-400">

            <th className="p-4">ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
            <th>Balance</th>
            <th></th>

          </tr>

        </thead>

        <tbody>

          {rows.map((user) => (

            <tr
              key={user.id}
              className="border-t border-white/5 hover:bg-white/5"
            >

              <td className="p-4">{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.country}</td>

              <td>
                <UserStatusBadge
                  status={user.status}
                />
              </td>

              <td>${user.balance}</td>

              <td>
                <UserActionMenu user={user} />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}