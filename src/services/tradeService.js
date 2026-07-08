import api from "./api";

const tradeService = {
  getAll(params) {
    return api.get("/admin/trades", { params });
  },

  getById(id) {
    return api.get(`/admin/trades/${id}`);
  },

  close(id) {
    return api.post(`/admin/trades/${id}/close`);
  },
};

export default tradeService;