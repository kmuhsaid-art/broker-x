export default function Card({ children, className = "" }) {

    return (

        <div
            className={`
            bg-[#131A29]
            border
            border-white/10
            rounded-3xl
            p-8
            hover:border-yellow-500
            transition
            duration-300
            ${className}
        `}
        >

            {children}

        </div>

    );
}