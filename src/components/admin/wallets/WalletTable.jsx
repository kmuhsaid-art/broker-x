import { useMemo } from "react";

import useWallets from "../../../hooks/useWallets";

import WalletStatusBadge from "./WalletStatusBadge";

import WalletActionMenu from "./WalletActionMenu";

export default function WalletTable() {
  const { wallets, loading } = useWallets();

  const rows = useMemo(() => {
    if (Array.isArray(wallets)) return wallets;
    if (Array.isArray(wallets?.data)) return wallets.data;
    return [];
  }, [wallets]);

  if (loading)
    return <div className="p-8">Loading...</div>;

  return (
    <div className="overflow-hidden rounded-2xl bg-[#111827]">

      <table className="w-full">

        <tbody>

          {rows.map((wallet) => (

            <tr key={wallet.id}>

              <td>{wallet.asset}</td>

              <td>{wallet.balance}</td>

              <td>

                <WalletStatusBadge
                  status={wallet.status}
                />

              </td>

              <td>

                <WalletActionMenu
                  wallet={wallet}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}