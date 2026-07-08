export default function AuthLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#081018] flex items-center justify-center px-6 py-12">

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          top-[-120px]
          left-[-120px]
          h-80
          w-80
          rounded-full
          bg-yellow-500/10
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-[-120px]
          right-[-120px]
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-3xl
          "
        />

      </div>

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

    </div>
  );
}