import { useEffect, useState } from "react";
import userService from "../services/userService";

export default function useUsers(params = {}) {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);

    userService
      .getAll(params)
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(refresh, []);

  return {
    users,
    loading,
    refresh,
  };
}