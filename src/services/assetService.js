import api from "./api";

const assetService = {
  getAll(params) {
    return api.get("/admin/assets", { params });
  },

  getById(id) {
    return api.get(`/admin/assets/${id}`);
  },

  create(data) {
    return api.post("/admin/assets", data);
  },

  update(id, data) {
    return api.put(`/admin/assets/${id}`, data);
  },

  delete(id) {
    return api.delete(`/admin/assets/${id}`);
  },
};

export default assetService;