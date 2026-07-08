import { useEffect, useState } from "react";
import withdrawalService from "../services/withdrawalService";

export default function useWithdrawals(params = {}) {
  const [withdrawals, setWithdrawals] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    withdrawalService
      .getAll(params)
      .then((res) => {
        setWithdrawals(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    withdrawals,
    loading,
    refresh,
  };
}