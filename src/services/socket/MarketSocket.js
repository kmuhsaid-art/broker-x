class MarketSocket {

    constructor() {

        this.socket = null;

        this.listeners = [];

    }

    connect(symbols = []) {

        if (this.socket) return;

        const streams = symbols
            .map(s => `${s.toLowerCase()}@ticker`)
            .join("/");

        this.socket = new WebSocket(

            `wss://stream.binance.com:9443/stream?streams=${streams}`

        );

        this.socket.onmessage = (event) => {

            const json = JSON.parse(event.data);

            this.listeners.forEach(listener => {

                listener(json.data);

            });

        };

    }

    subscribe(callback) {

        this.listeners.push(callback);

    }

    disconnect() {

        if (this.socket) {

            this.socket.close();

            this.socket = null;

        }

    }

}

export default new MarketSocket();