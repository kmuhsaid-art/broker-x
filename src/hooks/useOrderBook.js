import { useEffect, useState, useCallback } from "react";

import marketService from "../services/marketService";

export default function useOrderBook(symbol) {

    const [orderBook, setOrderBook] = useState(null);

    const [loading, setLoading] = useState(true);

    const loadOrderBook = useCallback(async () => {

        if (!symbol) return;

        try {

            setLoading(true);

            const data = await marketService.getOrderBook(symbol);

            setOrderBook(data);

        }

        finally {

            setLoading(false);

        }

    }, [symbol]);

    useEffect(() => {

        loadOrderBook();

    }, [loadOrderBook]);

    return {

        orderBook,

        loading,

        reload: loadOrderBook,

    };

}