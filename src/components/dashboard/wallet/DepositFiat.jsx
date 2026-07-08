const banks = [
  {
    bank: "Bank Central Asia",
    account: "Broker-X Ltd",
    number: "1234567890",
  },
  {
    bank: "Bank Mandiri",
    account: "Broker-X Ltd",
    number: "9876543210",
  },
];

export default function DepositFiat() {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/5 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Bank Deposit
      </h2>

      {banks.map((bank) => (

        <div
          key={bank.bank}
          className="rounded-xl bg-[#081018] p-5 mb-4"
        >

          <p className="text-gray-400">
            Bank
          </p>

          <h3 className="text-white font-semibold mb-4">
            {bank.bank}
          </h3>

          <p className="text-gray-400">
            Account Name
          </p>

          <h3 className="text-white mb-4">
            {bank.account}
          </h3>

          <p className="text-gray-400">
            Account Number
          </p>

          <h3 className="text-white">
            {bank.number}
          </h3>

        </div>

      ))}

    </div>
  );
}