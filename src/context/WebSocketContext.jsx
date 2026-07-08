import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const WebSocketContext = createContext(null);

export default function WebSocketProvider({
  children,
}) {
  const socket = useRef(null);

  const reconnectTimer = useRef(null);

  const [connected, setConnected] =
    useState(false);

  const [lastMessage, setLastMessage] =
    useState(null);

  const [ticker, setTicker] =
    useState({});

  const [orderBook, setOrderBook] =
    useState(null);

  const [trades, setTrades] =
    useState([]);

  const connect = useCallback(() => {
    if (
      socket.current &&
      socket.current.readyState === WebSocket.OPEN
    ) {
      return;
    }

    socket.current = new WebSocket(
      import.meta.env.VITE_WS_URL
    );

    socket.current.onopen = () => {
      setConnected(true);
    };

    socket.current.onclose = () => {
      setConnected(false);

      reconnectTimer.current =
        setTimeout(connect, 3000);
    };

    socket.current.onerror = () => {
      socket.current.close();
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);

      setLastMessage(message);

      switch (message.type) {
        case "ticker":
          setTicker(message.data);
          break;

        case "orderbook":
          setOrderBook(message.data);
          break;

        case "trade":
          setTrades((prev) => [
            message.data,
            ...prev,
          ].slice(0, 100));
          break;

        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    connect();

    return () => {
      clearTimeout(
        reconnectTimer.current
      );

      socket.current?.close();
    };
  }, [connect]);

  const send = useCallback((payload) => {
    if (
      socket.current &&
      socket.current.readyState === WebSocket.OPEN
    ) {
      socket.current.send(
        JSON.stringify(payload)
      );
    }
  }, []);

  const subscribe = useCallback(
    (channel, symbol) => {
      send({
        action: "subscribe",
        channel,
        symbol,
      });
    },
    [send]
  );

  const unsubscribe = useCallback(
    (channel, symbol) => {
      send({
        action: "unsubscribe",
        channel,
        symbol,
      });
    },
    [send]
  );

  const value = useMemo(
    () => ({
      connected,
      ticker,
      orderBook,
      trades,
      lastMessage,
      send,
      subscribe,
      unsubscribe,
    }),
    [
      connected,
      ticker,
      orderBook,
      trades,
      lastMessage,
      send,
      subscribe,
      unsubscribe,
    ]
  );

  return (
    <WebSocketContext.Provider
      value={value}
    >
      {children}
    </WebSocketContext.Provider>
  );
}