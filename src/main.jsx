import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App";

import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import WebSocketProvider from "./context/WebSocketContext";
import TradeProvider from "./context/TradeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <BrowserRouter>

            <ThemeProvider>

                <AuthProvider>

                    <WebSocketProvider>

                        <TradeProvider>

                            <App />

                            <Toaster
                                position="top-right"
                                reverseOrder={false}
                            />

                        </TradeProvider>

                    </WebSocketProvider>

                </AuthProvider>

            </ThemeProvider>

        </BrowserRouter>

    </React.StrictMode>
);