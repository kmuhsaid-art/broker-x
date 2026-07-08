import api from "./api";

export default {

    getWallets() {

        return api.get("/wallets");

    }

};