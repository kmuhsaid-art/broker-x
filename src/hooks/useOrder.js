import orderService from "../services/orderService";

export default function useOrder(){

    async function placeOrder(data){

        return await orderService.placeOrder(data);

    }

    return{

        placeOrder,

    };

}