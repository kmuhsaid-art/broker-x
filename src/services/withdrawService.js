import api from "./api";

export default {

    create(data) {

        return api.post("/withdrawals", data);

    },

    history() {

        return api.get("/withdrawals");

    }

};