import api from "./api";

const depositService = {

    getAll() {
        return api.get("/deposits");
    },

    create(data) {

        return api.post(
            "/deposits",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

    },

};

export default depositService;