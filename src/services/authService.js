import api from "./api";

const authService = {

    async register(data) {

        const response = await api.post("/register", data);

        return response;

    },

    async login(data) {

        const response = await api.post("/login", data);

        return response;

    },

    async profile() {

        const response = await api.get("/profile");

        return response;

    },

    async logout() {

        const response = await api.post("/logout");

        return response;

    },

};

export default authService;