import SettingsCard from "../../admin/settings/SettingsCard";

export default function TradingSettings() {
  return (
    <SettingsCard
      title="Trading Settings"
      description="Trading engine configuration."
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm text-gray-400">
            Maximum Leverage
          </label>

          <input
            defaultValue="500"
            className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm text-gray-400">
            Minimum Trade
          </label>

          <input
            defaultValue="10"
            className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3"
          />

        </div>

      </div>
    </SettingsCard>
  );
}