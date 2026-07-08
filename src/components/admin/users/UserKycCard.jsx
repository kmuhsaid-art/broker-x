export default function UserKycCard() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">

        KYC Verification

      </h2>

      <div className="space-y-4">

        <Item title="Identity" status="Verified" />

        <Item title="Address" status="Verified" />

        <Item title="Selfie" status="Verified" />

        <Item title="Risk Score" status="Low" />

      </div>

    </div>
  );
}

function Item({ title, status }) {
  return (
    <div className="flex justify-between">

      <span className="text-gray-400">
        {title}
      </span>

      <span className="text-green-400 font-medium">

        {status}

      </span>

    </div>
  );
}