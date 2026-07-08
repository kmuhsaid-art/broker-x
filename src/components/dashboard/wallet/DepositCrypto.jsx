const wallets = [
  {
    asset: "USDT (TRC20)",
    address: "TJ4Ff4Y9uR7X6Lz8QmB3wT5Yp1X9kA8mL",
  },
  {
    asset: "BTC",
    address: "bc1q7fh3zv4rwk2x4y6r5m2f8s8w0x5k9",
  },
  {
    asset: "ETH",
    address: "0x4A2f5D4B8B6F8F7e7dF1E1C3f5B9eA2d",
  },
];

export default function DepositCrypto() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Crypto Deposit
      </h2>

      {wallets.map((wallet) => (

        <div
          key={wallet.asset}
          className="mb-6 rounded-xl bg-[#081018] p-4"
        >

          <h3 className="text-white font-semibold mb-2">
            {wallet.asset}
          </h3>

          <div className="bg-white rounded-lg w-36 h-36 mx-auto mb-4"></div>

          <input
            readOnly
            value={wallet.address}
            className="w-full bg-[#111827] rounded-lg p-3 text-gray-400"
          />

        </div>

      ))}

    </div>
  );
}