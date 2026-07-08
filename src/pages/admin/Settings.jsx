import AdminLayout from "../../components/admin/AdminLayout";

import GeneralSettings from "../../components/admin/settings/GeneralSettings";
import SecuritySettings from "../../components/admin/settings/SecuritySettings";
import TradingSettings from "../../components/admin/settings/TradingSettings";
import SystemSettings from "../../components/admin/settings/SystemSettings";

export default function Settings() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Platform Settings
          </h1>

          <p className="mt-2 text-gray-400">
            Configure Broker-X Platform
          </p>

        </div>

        <GeneralSettings />

        <SecuritySettings />

        <TradingSettings />

        <SystemSettings />

        <div className="flex justify-end">

          <button
            className="
              rounded-xl
              bg-yellow-500
              px-8
              py-3
              font-semibold
              text-black
            "
          >
            Save Settings
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}