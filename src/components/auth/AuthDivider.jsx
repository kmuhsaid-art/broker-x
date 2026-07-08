export default function AuthDivider({
  text = "OR",
}) {
  return (
    <div className="relative my-6">

      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700" />
      </div>

      <div className="relative flex justify-center">
        <span className="bg-[#0B1120] px-4 text-sm text-gray-400">
          {text}
        </span>
      </div>

    </div>
  );
}