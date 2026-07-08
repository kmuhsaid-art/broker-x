import { useEffect, useState } from "react";
import marketService from "../services/marketService";

export default function useMarkets() {

    const [markets, setMarkets] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadMarkets();

    }, []);

    async function loadMarkets() {

        try {

            const data = await marketService.getMarkets();

            setMarkets(data);

        }

        catch(err){

            console.error(err);

        }

        finally{

            setLoading(false);

        }

    }

    return {

        markets,

        loading,

        reload: loadMarkets,

    };

}