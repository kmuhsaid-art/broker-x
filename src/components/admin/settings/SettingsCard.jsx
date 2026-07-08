export default function SettingsCard({
  title,
  description,
  children,
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {description}
        </p>

      </div>

      {children}

    </div>
  );
}