import { useEffect, useState } from "react";
import depositService from "../../services/depositService";

export default function RecentDeposits() {

    const [deposits, setDeposits] = useState([]);

    useEffect(() => {

        loadDeposits();

    }, []);

    async function loadDeposits() {

        try {

            const response = await depositService.getAll();

            setDeposits(response.data);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">

            <h2 className="text-xl font-semibold text-white mb-6">

                Recent Deposits

            </h2>

            <div className="space-y-4">

                {deposits.slice(0, 5).map((deposit) => (

                    <div
                        key={deposit.id}
                        className="flex justify-between border-b border-gray-700 pb-3"
                    >

                        <span>{deposit.transaction_number}</span>

                        <span>{deposit.amount}</span>

                        <span>{deposit.status}</span>

                    </div>

                ))}

            </div>

        </div>

    );

}