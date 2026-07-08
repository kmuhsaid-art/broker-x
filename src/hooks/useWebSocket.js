import { useContext } from "react";

import { WebSocketContext } from "../context/WebSocketContext";

export default function useWebSocket() {
  return useContext(WebSocketContext);
}