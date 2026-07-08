import api from "./api";

const reportService = {
  dashboard() {
    return api.get("/admin/reports/dashboard");
  },

  generate(data) {
    return api.post("/admin/reports/generate", data);
  },

  download(id) {
    return api.get(`/admin/reports/${id}`);
  },
};

export default reportService;