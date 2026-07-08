export default function OpenPositions({ positions }) {

  return (

    <div className="bg-[#111827] rounded-2xl p-6 border border-white/5">

      <h2 className="text-white text-xl font-bold mb-6">

        Open Positions

      </h2>

      {positions.length === 0 ? (

        <div className="text-gray-500">

          No positions

        </div>

      ) : (

        <div className="space-y-3">

          {positions.map((position) => (

            <div
              key={position.id}
              className="bg-[#1A2233] rounded-xl p-4"
            >

              <div className="flex justify-between">

                <span className="text-white">

                  {position.symbol}

                </span>

                <span className="text-green-400">

                  {position.side}

                </span>

              </div>

              <div className="text-gray-400 mt-2">

                Qty : {position.quantity}

              </div>

              <div className="text-gray-400">

                Entry : {position.entry_price}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}