import { useEffect, useState } from "react";
import dashboardService from "../services/dashboardService";

export default function useDashboard() {

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  async function loadDashboard() {

    try {

      setLoading(true);

      const data = await dashboardService.getDashboard();

      setDashboard(data);

    } catch (err) {

      console.error(err);

      setError(err);

    } finally {

      setLoading(false);

    }

  }

  return {

    dashboard,

    loading,

    error,

    reload: loadDashboard,

  };

}