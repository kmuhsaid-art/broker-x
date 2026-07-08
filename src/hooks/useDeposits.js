import { useEffect, useState } from "react";
import depositService from "../services/depositService";

export default function useDeposits(params = {}) {
  const [deposits, setDeposits] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    depositService
      .getAll(params)
      .then((res) => {
        setDeposits(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    deposits,
    loading,
    refresh,
  };
}