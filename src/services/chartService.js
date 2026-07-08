import api from "../api/axios";

export const getCandles = async (
  symbol = "BTCUSDT",
  interval = "1h",
  limit = 200
) => {
  const { data } = await api.get("/chart/candles", {
    params: {
      symbol,
      interval,
      limit,
    },
  });

  return data;
};

export const getTicker = async (
  symbol = "BTCUSDT"
) => {
  const { data } = await api.get("/chart/ticker", {
    params: {
      symbol,
    },
  });

  return data;
};

export const getDepth = async (
  symbol = "BTCUSDT"
) => {
  const { data } = await api.get("/chart/depth", {
    params: {
      symbol,
    },
  });

  return data;
};