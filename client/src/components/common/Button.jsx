import { motion } from "framer-motion";

function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    className = "",
}) {
    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.2 }}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                w-full
                rounded-xl
                bg-cyan-500
                px-4
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-cyan-500/40
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className}
            `}
        >
            {loading ? "Please wait..." : children}
        </motion.button>
    );
}

export default Button;