import { Star } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

export default function MarketRow({
  item,
  onFavorite,
}) {
  return (
    <tr className="border-b border-white/5 hover:bg-[#182234] transition">

      <td className="px-4 py-5">

        <button onClick={() => onFavorite(item.id)}>

          <Star
            size={18}
            fill={item.favorite ? "#FACC15" : "none"}
            className={
              item.favorite
                ? "text-yellow-400"
                : "text-gray-500 hover:text-yellow-500"
            }
          />

        </button>

      </td>

      <td className="font-semibold text-white">

        {item.symbol}

      </td>

      <td>

        <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs">

          {item.category}

        </span>

      </td>

      <td
        className={
          item.change >= 0
            ? "text-green-400 font-semibold"
            : "text-red-400 font-semibold"
        }
      >
        {formatPrice(item.price)}
      </td>

      <td
        className={
          item.change >= 0
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {item.change.toFixed(2)}%
      </td>

      <td className="text-gray-300">
        {formatPrice(item.high)}
      </td>

      <td className="text-gray-300">
        {formatPrice(item.low)}
      </td>

      <td className="text-gray-300">

        {item.volume}

      </td>

      <td className="text-center">

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg px-5 py-2 transition">

          Trade

        </button>

      </td>

    </tr>
  );
}