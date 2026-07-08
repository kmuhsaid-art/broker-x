import { useMemo } from "react";

import useWithdrawals from "../../../hooks/useWithdrawals";

import WithdrawalStatusBadge from "./WithdrawalStatusBadge";

import WithdrawalActionMenu from "./WithdrawalActionMenu";

export default function WithdrawalTable() {
  const { withdrawals, loading } = useWithdrawals();

  const rows = useMemo(() => {
    if (Array.isArray(withdrawals)) return withdrawals;
    if (Array.isArray(withdrawals?.data)) return withdrawals.data;
    return [];
  }, [withdrawals]);

  if (loading)
    return <div className="p-8">Loading...</div>;

  return (
    <div className="overflow-hidden rounded-2xl bg-[#111827]">

      <table className="w-full">

        <tbody>

          {rows.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.user}</td>

              <td>{item.amount}</td>

              <td>

                <WithdrawalStatusBadge
                  status={item.status}
                />

              </td>

              <td>

                <WithdrawalActionMenu
                  withdrawal={item}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}