export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">

      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition">
        Start Trading
      </button>

      <button className="border border-white/20 hover:border-yellow-500 text-white px-8 py-4 rounded-xl transition">
        Open Demo
      </button>

    </div>
  );
}