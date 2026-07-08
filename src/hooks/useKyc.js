import { useEffect, useState } from "react";
import kycService from "../services/kycService";

export default function useKyc(params = {}) {
  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    kycService
      .getAll(params)
      .then((res) => {
        setRequests(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    requests,
    loading,
    refresh,
  };
}