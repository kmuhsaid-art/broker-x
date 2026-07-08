export default function RememberMe({
  checked,
  onChange,
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-600 bg-[#111827] text-yellow-500 focus:ring-yellow-500"
      />

      <span className="text-sm text-gray-300">
        Remember Me
      </span>

    </label>
  );
}