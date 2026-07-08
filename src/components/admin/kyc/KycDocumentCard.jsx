export default function KycDocumentCard({
  title,
  image,
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-5">

      <h3 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="overflow-hidden rounded-xl border border-white/10">

        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover"
        />

      </div>

    </div>
  );
}