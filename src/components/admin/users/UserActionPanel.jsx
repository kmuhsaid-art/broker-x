export default function UserActionPanel() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">

        Administrative Actions

      </h2>

      <div className="flex flex-wrap gap-4">

        <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
          Verify User
        </button>

        <button className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black">
          Suspend User
        </button>

        <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white">
          Reset Password
        </button>

        <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white">
          Delete User
        </button>

      </div>

    </div>
  );
}