const positions = [
  {
    pair: "BTCUSDT",
    margin: "2500 USDT",
  },
  {
    pair: "ETHUSDT",
    margin: "1400 USDT",
  },
];

export default function FuturesWallet() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Futures Wallet
      </h2>

      {positions.map((item) => (

        <div
          key={item.pair}
          className="flex justify-between py-3 border-b border-white/5"
        >

          <span>{item.pair}</span>

          <span>{item.margin}</span>

        </div>

      ))}

    </div>
  );
}