export default function UserInfoCard({ user }) {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="space-y-4">

        <Info label="User ID" value={user.id} />

        <Info label="Email" value={user.email} />

        <Info label="Phone" value={user.phone} />

        <Info label="Country" value={user.country} />

        <Info label="Account Level" value={user.level} />

      </div>

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between">

      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-medium text-white">
        {value}
      </span>

    </div>
  );
}