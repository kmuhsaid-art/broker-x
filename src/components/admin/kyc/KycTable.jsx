import KycStatusBadge from "./KycStatusBadge";
import KycActionMenu from "./KycActionMenu";

const requests = [
  {
    id: "USR00001",
    name: "John Doe",
    email: "john@example.com",
    document: "Passport",
    country: "United States",
    submitted: "2026-06-28",
    status: "Pending",
  },
  {
    id: "USR00002",
    name: "Sophia Brown",
    email: "sophia@example.com",
    document: "National ID",
    country: "United Kingdom",
    submitted: "2026-06-27",
    status: "Approved",
  },
  {
    id: "USR00003",
    name: "Michael Lee",
    email: "michael@example.com",
    document: "Driving License",
    country: "Singapore",
    submitted: "2026-06-26",
    status: "Rejected",
  },
];

export default function KycTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">

      <div className="border-b border-white/5 p-6">

        <h2 className="text-xl font-semibold text-white">
          Verification Requests
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0F172A]">

            <tr className="text-left text-sm uppercase tracking-wide text-gray-400">

              <th className="p-4">User ID</th>

              <th>User</th>

              <th>Document</th>

              <th>Country</th>

              <th>Submitted</th>

              <th>Status</th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (

              <tr
                key={item.id}
                className="border-t border-white/5 hover:bg-white/5 transition"
              >

                <td className="p-4 font-medium text-yellow-500">
                  {item.id}
                </td>

                <td>

                  <div>

                    <p className="font-medium text-white">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-400">
                      {item.email}
                    </p>

                  </div>

                </td>

                <td>{item.document}</td>

                <td>{item.country}</td>

                <td>{item.submitted}</td>

                <td>

                  <KycStatusBadge
                    status={item.status}
                  />

                </td>

                <td>

                  <KycActionMenu />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}