export default function AuthButton({
  children,
  type = "submit",
  disabled = false,
}) {
  console.log("AuthButton render", type);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => console.log("BUTTON CLICK")}
      className="w-full py-3 rounded-xl bg-red-500 text-white"
    >
      {children}
    </button>
  );
}