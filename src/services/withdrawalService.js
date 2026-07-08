import api from "./api";

const withdrawalService = {
  getAll(params) {
    return api.get("/admin/withdrawals", { params });
  },

  approve(id) {
    return api.post(`/admin/withdrawals/${id}/approve`);
  },

  reject(id) {
    return api.post(`/admin/withdrawals/${id}/reject`);
  },
};

export default withdrawalService;