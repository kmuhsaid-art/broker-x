export default function AuthInput({
  label,
  error,
  ...props
}) {
  return (
    <div>
      <label className="block mb-2 text-gray-300">
        {label}
      </label>

      <input
        {...props}
        className="
        w-full
        bg-[#081018]
        border
        border-white/10
        rounded-xl
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        transition
        "
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}