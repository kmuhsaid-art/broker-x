import useMarkets from "../../../hooks/useMarkets";

export default function LiveMarket() {

    const {
        markets,
        loading,
    } = useMarkets();

    if (loading) {

        return (

            <section className="py-20">

                <div className="text-center text-white">

                    Loading Markets...

                </div>

            </section>

        );

    }

    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-white mb-10">

                    Live Markets

                </h2>

                <div className="overflow-hidden rounded-2xl border border-white/10">

                    <table className="w-full">

                        <thead className="bg-[#111827]">

                            <tr className="text-gray-400">

                                <th className="py-4">Pair</th>

                                <th>Engine</th>

                                <th>Price</th>

                                <th>24H</th>

                                <th>High</th>

                                <th>Low</th>

                                <th>Volume</th>

                            </tr>

                        </thead>

                        <tbody>

                            {markets.map((market) => (

                                <tr
                                    key={market.id}
                                    className="border-t border-white/5 text-center"
                                >

                                    <td className="py-4 text-white">

                                        {market.display_name}

                                    </td>

                                    <td>

                                        {market.engine}

                                    </td>

                                    <td className="text-yellow-400">

                                        {market.price}

                                    </td>

                                    <td
                                        className={
                                            Number(market.change_24h) >= 0
                                                ? "text-green-400"
                                                : "text-red-400"
                                        }
                                    >

                                        {market.change_24h}%

                                    </td>

                                    <td>

                                        {market.high_24h}

                                    </td>

                                    <td>

                                        {market.low_24h}

                                    </td>

                                    <td>

                                        {market.volume_24h}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

}