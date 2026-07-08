const wallets = [
  {
    symbol: "USD",
    balance: "$12,420.00",
  },
  {
    symbol: "BTC",
    balance: "0.624512",
  },
  {
    symbol: "ETH",
    balance: "8.2500",
  },
];

export default function UserWalletCard() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-semibold mb-6">

        Wallet

      </h2>

      <div className="space-y-5">

        {wallets.map((wallet) => (

          <div
            key={wallet.symbol}
            className="flex justify-between border-b border-white/5 pb-3"
          >

            <span>
              {wallet.symbol}
            </span>

            <span className="font-semibold text-green-400">

              {wallet.balance}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}