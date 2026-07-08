import AdminLayout from "../../components/admin/AdminLayout";
import WalletStatistics from "../../components/admin/wallets/WalletStatistics";
import WalletFilter from "../../components/admin/wallets/WalletStatistics";
import WalletTable from "../../components/admin/wallets/WalletStatistics";

export default function Wallets() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Wallet Management
        </h1>

        <WalletStatistics />

        <WalletFilter />

        <WalletTable />

      </div>

    </AdminLayout>
  );
}