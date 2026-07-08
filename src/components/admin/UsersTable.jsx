const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    country: "USA",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Lee",
    email: "michael@example.com",
    country: "Singapore",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia@example.com",
    country: "United Kingdom",
    status: "Active",
  },
];

export default function UserTable() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] overflow-hidden">

      <div className="p-6 border-b border-white/5">
        <h2 className="text-xl font-semibold text-white">
          Users
        </h2>
      </div>

      <table className="w-full">

        <thead className="bg-[#0F172A]">

          <tr className="text-left text-gray-400">

            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-t border-white/5 hover:bg-white/5"
            >

              <td className="p-4 text-white">
                {user.name}
              </td>

              <td>{user.email}</td>

              <td>{user.country}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {user.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}