import SettingsCard from "../../admin/settings/SettingsCard";

export default function SystemSettings() {
  return (
    <SettingsCard
      title="System"
      description="Platform maintenance configuration."
    >
      <div className="space-y-5">

        <label className="flex items-center justify-between">

          <span>Maintenance Mode</span>

          <input type="checkbox" />

        </label>

        <label className="flex items-center justify-between">

          <span>Enable API</span>

          <input type="checkbox" defaultChecked />

        </label>

        <label className="flex items-center justify-between">

          <span>Enable WebSocket</span>

          <input type="checkbox" defaultChecked />

        </label>

      </div>
    </SettingsCard>
  );
}