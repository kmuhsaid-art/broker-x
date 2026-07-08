import { useEffect, useState } from "react";
import walletService from "../../services/walletService";

export default function BalanceCard() {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        loadWallets();
    }, []);

    async function loadWallets() {
        try {
            const response = await walletService.getWallets();
            setWallets(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const total = wallets.reduce(
        (sum, wallet) => sum + Number(wallet.balance),
        0
    );

    return (
        <div className="bg-[#111827] rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-400">
                Total Balance
            </p>

            <h1 className="text-4xl font-bold text-white mt-2">
                ${total.toLocaleString()}
            </h1>
        </div>
    );
}