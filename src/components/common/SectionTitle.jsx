export default function SectionTitle({

    badge,
    title,
    subtitle,

}) {

    return (

        <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-yellow-500 text-sm">

                {badge}

            </span>

            <h2 className="text-4xl font-bold text-white mt-3">

                {title}

            </h2>

            <p className="text-gray-400 mt-5 max-w-3xl mx-auto">

                {subtitle}

            </p>

        </div>

    );

}