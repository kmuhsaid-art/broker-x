import SettingsCard from "../../admin/settings/SettingsCard";

export default function SecuritySettings() {
  return (
    <SettingsCard
      title="Security"
      description="Authentication and security settings."
    >
      <div className="space-y-5">

        <label className="flex items-center justify-between">

          <span>Enable Two-Factor Authentication</span>

          <input type="checkbox" defaultChecked />

        </label>

        <label className="flex items-center justify-between">

          <span>Require Email Verification</span>

          <input type="checkbox" defaultChecked />

        </label>

        <label className="flex items-center justify-between">

          <span>Allow New Registration</span>

          <input type="checkbox" defaultChecked />

        </label>

      </div>
    </SettingsCard>
  );
}