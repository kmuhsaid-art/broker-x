import { useCallback, useState } from "react";

export default function useApi(service) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);

        const response = await service(...args);

        setData(response.data);

        return response.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [service]
  );

  return {
    data,
    loading,
    error,
    execute,
  };
}