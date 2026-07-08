import { Routes, Route } from "react-router-dom";

import RouteGuard from "./RouteGuard";

/*
|--------------------------------------------------------------------------
| Public Pages
|--------------------------------------------------------------------------
*/

import Home from "../pages/Home";
import Market from "../pages/Market";
import Trade from "../pages/Trade";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import History from "../pages/History";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

/*
|--------------------------------------------------------------------------
| Auth Pages
|--------------------------------------------------------------------------
*/

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/*
|--------------------------------------------------------------------------
| User Pages
|--------------------------------------------------------------------------
*/

import Dashboard from "../pages/user/Dashboard";
import Wallets from "../pages/user/Wallets";

/*
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
*/

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import UserDetail from "../pages/admin/UserDetail";
import KYC from "../pages/admin/KYC";
import Deposits from "../pages/admin/Deposits";
import Withdrawals from "../pages/admin/Withdrawals";
import Trades from "../pages/admin/Trades";
import WalletsAdmin from "../pages/admin/Wallets";
import Reports from "../pages/admin/Reports";
import Assets from "../pages/admin/Assets";
import SettingsAdmin from "../pages/admin/Settings";

export default function AppRoutes() {
    return (
        <Routes>

            {/* ========================= */}
            {/* PUBLIC */}
            {/* ========================= */}

            <Route path="/" element={<Home />} />

            {/* ========================= */}
            {/* AUTH */}
            {/* ========================= */}

            <Route
                path="/login"
                element={
                    <RouteGuard guestOnly>
                        <Login />
                    </RouteGuard>
                }
            />

            <Route
                path="/register"
                element={
                    <RouteGuard guestOnly>
                        <Register />
                    </RouteGuard>
                }
            />

            <Route
                path="/forgot-password"
                element={
                    <RouteGuard guestOnly>
                        <ForgotPassword />
                    </RouteGuard>
                }
            />

            <Route
                path="/reset-password"
                element={
                    <RouteGuard guestOnly>
                        <ResetPassword />
                    </RouteGuard>
                }
            />

            {/* ========================= */}
            {/* USER */}
            {/* ========================= */}

            <Route
                path="/dashboard"
                element={
                    <RouteGuard requireAuth>
                        <Dashboard />
                    </RouteGuard>
                }
            />

            <Route
                path="/wallet"
                element={
                    <RouteGuard requireAuth>
                        <Wallets />
                    </RouteGuard>
                }
            />

            <Route
                path="/market"
                element={
                    <RouteGuard requireAuth>
                        <Market />
                    </RouteGuard>
                }
            />

            <Route
                path="/trade"
                element={
                    <RouteGuard requireAuth>
                        <Trade />
                    </RouteGuard>
                }
            />

            <Route
                path="/deposit"
                element={
                    <RouteGuard requireAuth>
                        <Deposit />
                    </RouteGuard>
                }
            />

            <Route
                path="/withdraw"
                element={
                    <RouteGuard requireAuth>
                        <Withdraw />
                    </RouteGuard>
                }
            />

            <Route
                path="/history"
                element={
                    <RouteGuard requireAuth>
                        <History />
                    </RouteGuard>
                }
            />

            <Route
                path="/settings"
                element={
                    <RouteGuard requireAuth>
                        <Settings />
                    </RouteGuard>
                }
            />

            {/* ========================= */}
            {/* ADMIN */}
            {/* ========================= */}

            <Route
                path="/admin"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <AdminDashboard />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/users"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Users />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/users/:id"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <UserDetail />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/kyc"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <KYC />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/deposits"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Deposits />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/withdrawals"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Withdrawals />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/trades"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Trades />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/wallets"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <WalletsAdmin />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/reports"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Reports />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/assets"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <Assets />
                    </RouteGuard>
                }
            />

            <Route
                path="/admin/settings"
                element={
                    <RouteGuard requireAuth roles={["admin"]}>
                        <SettingsAdmin />
                    </RouteGuard>
                }
            />

            {/* ========================= */}
            {/* 404 */}
            {/* ========================= */}

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}