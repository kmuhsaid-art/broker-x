export default function DepositWithdrawCard() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <h2 className="text-lg font-semibold text-white mb-6">
        Wallet Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          className="
          rounded-xl
          bg-green-600
          py-3
          font-semibold
          text-white
          hover:bg-green-500
          transition
          "
        >
          Deposit
        </button>

        <button
          className="
          rounded-xl
          bg-red-600
          py-3
          font-semibold
          text-white
          hover:bg-red-500
          transition
          "
        >
          Withdraw
        </button>

      </div>

    </div>
  );
}