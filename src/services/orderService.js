import api from "./api";

const orderService = {

    async placeOrder(data){

        const response = await api.post(

            "/orders",

            data

        );

        return response.data;

    }

};

export default orderService;