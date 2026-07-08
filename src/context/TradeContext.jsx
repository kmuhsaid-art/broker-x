import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import useMarket from "../hooks/useMarket";
import useOrderBook from "../hooks/useOrderBook";
import useMarkets from "../hooks/useMarkets";

export const TradeContext = createContext(null);

export default function TradeProvider({ children }) {
  /*
  |--------------------------------------------------------------------------
  | Selected Market
  |--------------------------------------------------------------------------
  */

  const [selectedSymbol, setSelectedSymbol] = useState("BTCUSDT");

  /*
  |--------------------------------------------------------------------------
  | Market Detail
  |--------------------------------------------------------------------------
  */

  const {
    market,
    loading,
    reload,
  } = useMarket(selectedSymbol);

  /*
  |--------------------------------------------------------------------------
  | Order Book
  |--------------------------------------------------------------------------
  */

  const {
    orderBook,
    reload: reloadOrderBook,
  } = useOrderBook(selectedSymbol);

  /*
  |--------------------------------------------------------------------------
  | Market Ticker
  |--------------------------------------------------------------------------
  */

  const {
    markets = [],
  } = useMarkets();

  const ticker =
    markets.find(
      (item) => item.symbol === selectedSymbol
    ) || null;

  /*
  |--------------------------------------------------------------------------
  | Context Value
  |--------------------------------------------------------------------------
  */

  const value = useMemo(
    () => ({
      selectedSymbol,
      setSelectedSymbol,

      market,
      ticker,

      loading,
      reload,

      orderBook,
      reloadOrderBook,
    }),
    [
      selectedSymbol,
      market,
      ticker,
      loading,
      reload,
      orderBook,
      reloadOrderBook,
    ]
  );

  return (
    <TradeContext.Provider value={value}>
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  return useContext(TradeContext);
}