export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {

    const styles = {
        primary:
            "bg-yellow-500 hover:bg-yellow-400 text-black",

        secondary:
            "border border-white/20 hover:border-yellow-500 text-white",

        danger:
            "bg-red-500 hover:bg-red-400 text-white",
    };

    return (

        <button
            className={`
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
            duration-300
            ${styles[variant]}
            ${className}
        `}
            {...props}
        >

            {children}

        </button>

    );
}