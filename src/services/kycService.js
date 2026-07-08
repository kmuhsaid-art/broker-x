import api from "./api";

const kycService = {
  getAll(params) {
    return api.get("/admin/kyc", { params });
  },

  approve(id) {
    return api.post(`/admin/kyc/${id}/approve`);
  },

  reject(id, data) {
    return api.post(`/admin/kyc/${id}/reject`, data);
  },
};

export default kycService;