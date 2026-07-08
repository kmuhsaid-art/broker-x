import { useEffect, useState } from "react";
import walletService from "../../services/walletService";

export default function WalletCards() {

    const [wallets, setWallets] = useState([]);

    useEffect(() => {

        walletService
            .getWallets()
            .then((res) => setWallets(res.data));

    }, []);

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {wallets.map((wallet) => (

                <div
                    key={wallet.id}
                    className="bg-[#111827] rounded-xl p-6 border border-gray-800"
                >

                    <div className="text-gray-400">

                        {wallet.asset.name}

                    </div>

                    <div className="text-2xl font-bold text-white mt-3">

                        {wallet.balance}

                    </div>

                    <div className="text-yellow-500">

                        {wallet.asset.symbol}

                    </div>

                </div>

            ))}

        </div>

    );

}