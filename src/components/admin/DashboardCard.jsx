export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color = "text-yellow-500",
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

        </div>

        {Icon && (
          <div className="rounded-xl bg-white/5 p-4">

            <Icon
              size={34}
              className={color}
            />

          </div>
        )}

      </div>

    </div>
  );
}