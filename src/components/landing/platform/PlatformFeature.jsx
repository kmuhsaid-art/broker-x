export default function PlatformFeature({
  icon: Icon,
  title,
}) {
  return (
    <div className="flex items-center gap-4">

      <div
        className="
        h-12
        w-12
        rounded-xl
        bg-yellow-500/10
        flex
        items-center
        justify-center
        "
      >
        <Icon
          className="text-yellow-500"
          size={24}
        />
      </div>

      <p className="text-white">
        {title}
      </p>

    </div>
  );
}