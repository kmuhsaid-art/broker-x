export default function AuthCard({
    title,
    subtitle,
    children,
}) {
    return (
        <div
            className="
            bg-[#131A29]
            rounded-3xl
            border
            border-white/10
            p-10
            shadow-2xl
        "
        >
            <h1 className="text-white text-4xl font-bold">
                {title}
            </h1>

            <p className="text-gray-400 mt-3">
                {subtitle}
            </p>

            <div className="mt-10">
                {children}
            </div>
        </div>
    );
}