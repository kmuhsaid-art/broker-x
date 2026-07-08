import api from "./api";

const settingsService = {
  get() {
    return api.get("/admin/settings");
  },

  update(data) {
    return api.put("/admin/settings", data);
  },
};

export default settingsService;