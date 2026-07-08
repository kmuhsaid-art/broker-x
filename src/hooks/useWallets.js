import { useEffect, useState } from "react";
import walletService from "../services/walletService";

export default function useWallets(params = {}) {
  const [wallets, setWallets] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    walletService
      .getAll(params)
      .then((res) => {
        setWallets(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    wallets,
    loading,
    refresh,
  };
}