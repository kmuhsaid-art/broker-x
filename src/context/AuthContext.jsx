import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import authService from "../services/authService";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [authenticated, setAuthenticated] = useState(false);

    const [loading, setLoading] = useState(true);

    /*
    |--------------------------------------------------------------------------
    | Restore Session
    |--------------------------------------------------------------------------
    */

    const restoreSession = useCallback(async () => {

        const token = localStorage.getItem("brokerx_token");

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const response = await authService.profile();

            const profile = response.data?.data || response.data;

            setUser(profile);

            setAuthenticated(true);

        } catch (error) {

            console.error("Restore Session:", error);

            /**
             * Jangan langsung hapus token.
             * Bisa saja backend baru restart,
             * timeout,
             * atau koneksi sedang gagal.
             */

        } finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        restoreSession();

    }, [restoreSession]);

    /*
    |--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------
    */

    const login = useCallback((token, user) => {

        localStorage.setItem("brokerx_token", token);

        setUser(user);

        setAuthenticated(true);

    }, []);

    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    const logout = useCallback(async () => {

        try {

            await authService.logout();

        } catch (e) {

            console.error(e);

        }

        localStorage.removeItem("brokerx_token");

        setUser(null);

        setAuthenticated(false);

    }, []);

    /*
    |--------------------------------------------------------------------------
    | Refresh Profile
    |--------------------------------------------------------------------------
    */

    const refreshProfile = useCallback(async () => {

        try {

            const response = await authService.profile();

            const profile = response.data?.data || response.data;

            setUser(profile);

            setAuthenticated(true);

        } catch (error) {

            console.error(error);

        }

    }, []);

    const value = useMemo(() => ({

        user,

        authenticated,

        loading,

        login,

        logout,

        refreshProfile,

    }), [

        user,

        authenticated,

        loading,

        login,

        logout,

        refreshProfile,

    ]);

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}