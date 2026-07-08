import { useMemo } from "react";

import useTrades from "../../../hooks/useTrades";

import TradeTypeBadge from "./TradeTypeBadge";

import TradeActionMenu from "./TradeActionMenu";

export default function TradeTable() {
  const { trades, loading } = useTrades();

  const rows = useMemo(() => {
    if (Array.isArray(trades)) return trades;
    if (Array.isArray(trades?.data)) return trades.data;
    return [];
  }, [trades]);

  if (loading)
    return <div className="p-8">Loading...</div>;

  return (
    <div className="overflow-hidden rounded-2xl bg-[#111827]">

      <table className="w-full">

        <tbody>

          {rows.map((trade) => (

            <tr key={trade.id}>

              <td>{trade.symbol}</td>

              <td>

                <TradeTypeBadge
                  type={trade.type}
                />

              </td>

              <td>{trade.volume}</td>

              <td>{trade.profit}</td>

              <td>

                <TradeActionMenu
                  trade={trade}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}