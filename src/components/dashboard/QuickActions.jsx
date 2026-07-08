import { Link } from "react-router-dom";

export default function QuickActions() {

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Link
                to="/deposit"
                className="bg-yellow-500 rounded-xl p-5 text-center font-semibold text-black"
            >
                Deposit
            </Link>

            <Link
                to="/withdraw"
                className="bg-gray-800 rounded-xl p-5 text-center text-white"
            >
                Withdraw
            </Link>

            <Link
                to="/wallets"
                className="bg-gray-800 rounded-xl p-5 text-center text-white"
            >
                Wallets
            </Link>

            <Link
                to="/profile"
                className="bg-gray-800 rounded-xl p-5 text-center text-white"
            >
                Profile
            </Link>

        </div>

    );

}