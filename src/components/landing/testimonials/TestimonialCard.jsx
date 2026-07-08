import { Star } from "lucide-react";

export default function TestimonialCard({
  avatar,
  name,
  role,
  comment,
}) {
  return (
    <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

      <div className="flex items-center gap-4">

        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>

          <h3 className="text-white font-semibold">
            {name}
          </h3>

          <p className="text-gray-400 text-sm">
            {role}
          </p>

        </div>

      </div>

      <div className="flex gap-1 mt-5">

        {[1,2,3,4,5].map((item) => (
          <Star
            key={item}
            size={16}
            className="text-yellow-500 fill-yellow-500"
          />
        ))}

      </div>

      <p className="text-gray-300 mt-4 leading-7">
        "{comment}"
      </p>

    </div>
  );
}