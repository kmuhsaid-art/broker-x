import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RouteGuard({
  children,
  requireAuth = false,
  guestOnly = false,
  roles = [],
}) {

  const {
    authenticated,
    user,
    loading,
  } = useAuth();

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#081018] flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-yellow-500">
            Broker-X
          </h1>

          <p className="mt-4 text-gray-400">
            Loading...
          </p>

        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Guest Pages
  |--------------------------------------------------------------------------
  */

  if (guestOnly) {

    if (authenticated) {

      return <Navigate to="/dashboard" replace />;

    }

    return children;

  }

  /*
  |--------------------------------------------------------------------------
  | Protected Pages
  |--------------------------------------------------------------------------
  */

  if (requireAuth) {

    if (!authenticated) {

      return <Navigate to="/login" replace />;

    }

    if (
      roles.length > 0 &&
      !roles.includes(user?.role)
    ) {

      return <Navigate to="/" replace />;

    }

    return children;

  }

  /*
  |--------------------------------------------------------------------------
  | Public Pages
  |--------------------------------------------------------------------------
  */

  return children;

}