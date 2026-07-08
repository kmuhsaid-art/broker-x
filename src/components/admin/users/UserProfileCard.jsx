export default function UserProfileCard({
  user,
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="flex items-center gap-4">

        <img
          src={
            user.avatar ||
            "https://i.pravatar.cc/100"
          }
          alt={user.name}
          className="h-20 w-20 rounded-full"
        />

        <div>

          <h2 className="text-2xl font-bold text-white">
            {user.name}
          </h2>

          <p className="text-gray-400">
            {user.email}
          </p>

          <p className="mt-2 text-sm text-yellow-500">
            User ID : {user.id}
          </p>

        </div>

      </div>

    </div>
  );
}