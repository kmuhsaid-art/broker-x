export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#081018] flex items-center justify-center px-6">

      {/* Background Blur */}
      <div className="absolute top-10 left-10 h-80 w-80 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

    </div>
  );
}