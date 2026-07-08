import api from "./api";

const marketService = {

  async getMarkets() {

    const response = await api.get("/markets");

    return response.data;

  },

  async getMarket(symbol) {

    const response = await api.get(

      `/markets/${symbol}`

    );

    return response.data;

  },

  async getOrderBook(symbol) {

    const response = await api.get(

        `/markets/${symbol}/orderbook`

    );

    return response.data;

},

};

export default marketService;