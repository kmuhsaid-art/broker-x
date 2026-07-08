export default function KycFilter() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <div className="grid lg:grid-cols-5 gap-4">

        <input
          placeholder="Search User..."
          className="rounded-xl bg-[#0F172A] border border-white/10 px-4 py-3"
        />

        <select className="rounded-xl bg-[#0F172A] border border-white/10 px-4">

          <option>All Status</option>

          <option>Pending</option>

          <option>Approved</option>

          <option>Rejected</option>

        </select>

        <select className="rounded-xl bg-[#0F172A] border border-white/10 px-4">

          <option>Document Type</option>

          <option>Passport</option>

          <option>ID Card</option>

          <option>Driving License</option>

        </select>

        <input
          type="date"
          className="rounded-xl bg-[#0F172A] border border-white/10 px-4"
        />

        <button className="rounded-xl bg-yellow-500 text-black font-semibold">
          Search
        </button>

      </div>

    </div>
  );
}