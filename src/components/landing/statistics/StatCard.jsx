import AnimatedCounter from "../../AnimatedCounter";

export default function StatCard({
    end,
    prefix = "",
    suffix = "",
    decimals = 0,
    title,
    color,
}) {
    return (
        <div
            className="
            bg-[#131A29]
            rounded-2xl
            border
            border-white/10
            p-8
            hover:border-yellow-500
            transition
        "
        >
            <h2 className={`text-4xl font-bold ${color}`}>

                <AnimatedCounter
                    end={end}
                    prefix={prefix}
                    suffix={suffix}
                    decimals={decimals}
                />

            </h2>

            <p className="mt-3 text-gray-400">
                {title}
            </p>
        </div>
    );
}