export default function UserFilters() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="grid gap-4 md:grid-cols-4">

        <input
          placeholder="Search user..."
          className="rounded-xl bg-[#0F172A] border border-white/10 px-4 py-3 outline-none"
        />

        <select className="rounded-xl bg-[#0F172A] border border-white/10 px-4">

          <option>All Status</option>

          <option>Active</option>

          <option>Pending</option>

          <option>Blocked</option>

        </select>

        <select className="rounded-xl bg-[#0F172A] border border-white/10 px-4">

          <option>All Countries</option>

        </select>

        <button className="rounded-xl bg-yellow-500 py-3 font-semibold text-black">
          Search
        </button>

      </div>

    </div>
  );
}