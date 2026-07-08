import { ArrowRight } from "lucide-react";

export default function ProductCard({
  title,
  description,
  icon: Icon,
  color,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-[#131A29]
      rounded-3xl
      border
      border-white/10
      p-8
      transition
      duration-300
      hover:border-yellow-500
      hover:-translate-y-2
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-yellow-500/5
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        "
      />

      <Icon
        size={48}
        className={`${color} relative z-10`}
      />

      <h3 className="text-white text-2xl font-bold mt-8 relative z-10">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7 relative z-10">
        {description}
      </p>

      <button
        className="
        flex
        items-center
        gap-2
        mt-8
        text-yellow-500
        font-semibold
        relative
        z-10
        "
      >
        Explore

        <ArrowRight
          size={18}
          className="group-hover:translate-x-2 transition"
        />

      </button>
    </div>
  );
}