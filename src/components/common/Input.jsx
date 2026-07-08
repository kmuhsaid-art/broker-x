import clsx from "clsx";

export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none transition",
          "focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20",
          error && "border-red-500",
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}