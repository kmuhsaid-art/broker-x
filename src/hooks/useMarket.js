import { useEffect, useState, useCallback } from "react";

import marketService from "../services/marketService";

export default function useMarket(symbol) {

  const [market, setMarket] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadMarket = useCallback(async () => {

    if (!symbol) return;

    try {

      setLoading(true);

      const data = await marketService.getMarket(symbol);

      setMarket(data);

    } catch (error) {

      console.error("Failed to load market:", error);

    } finally {

      setLoading(false);

    }

  }, [symbol]);

  useEffect(() => {

    loadMarket();

  }, [loadMarket]);

  return {

    market,

    loading,

    reload: loadMarket,

  };

}