import { useEffect, useState } from "react";
import tradeService from "../services/tradeService";

export default function useTrades(params = {}) {
  const [trades, setTrades] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    tradeService
      .getAll(params)
      .then((res) => {
        setTrades(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    trades,
    loading,
    refresh,
  };
}