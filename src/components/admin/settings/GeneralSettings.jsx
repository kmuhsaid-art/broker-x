import SettingsCard from "../../admin/settings/SettingsCard";

export default function GeneralSettings() {
  return (
    <SettingsCard
      title="General Settings"
      description="Basic platform configuration."
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Broker Name
          </label>

          <input
            defaultValue="Broker-X"
            className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Support Email
          </label>

          <input
            defaultValue="support@brokerx.com"
            className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3"
          />
        </div>

      </div>
    </SettingsCard>
  );
}