import api from "./api";

const userService = {
  getAll(params) {
    return api.get("/admin/users", { params });
  },

  getById(id) {
    return api.get(`/admin/users/${id}`);
  },

  update(id, data) {
    return api.put(`/admin/users/${id}`, data);
  },

  delete(id) {
    return api.delete(`/admin/users/${id}`);
  },
};

export default userService;