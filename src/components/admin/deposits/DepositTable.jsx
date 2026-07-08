import { useMemo } from "react";

import useDeposits from "../../../hooks/useDeposits";

import DepositStatusBadge from "./DepositStatusBadge";

import DepositActionMenu from "./DepositActionMenu";

export default function DepositTable() {
  const { deposits, loading } = useDeposits();

  const rows = useMemo(() => {
    if (Array.isArray(deposits)) return deposits;
    if (Array.isArray(deposits?.data)) return deposits.data;
    return [];
  }, [deposits]);

  if (loading)
    return (
      <div className="p-8">
        Loading...
      </div>
    );

  return (
    <div className="overflow-hidden rounded-2xl bg-[#111827]">

      <table className="w-full">

        <tbody>

          {rows.map((deposit) => (

            <tr key={deposit.id}>

              <td>{deposit.id}</td>

              <td>{deposit.user}</td>

              <td>{deposit.amount}</td>

              <td>

                <DepositStatusBadge
                  status={deposit.status}
                />

              </td>

              <td>

                <DepositActionMenu
                  deposit={deposit}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}