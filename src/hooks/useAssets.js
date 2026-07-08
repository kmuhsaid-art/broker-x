import { useEffect, useState } from "react";
import assetService from "../services/assetService";

export default function useAssets(params = {}) {
  const [assets, setAssets] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    assetService
      .getAll(params)
      .then((res) => {
        setAssets(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    assets,
    loading,
    refresh,
  };
}