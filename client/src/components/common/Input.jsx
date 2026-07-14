import { motion } from "framer-motion";

function Input({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    icon: Icon,
}) {
    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            <motion.div
                whileFocus={{ scale: 1.01 }}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-800
                    px-4
                    py-3
                    transition-all
                    duration-300
                    focus-within:border-cyan-500
                    focus-within:ring-2
                    focus-within:ring-cyan-500/20
                "
            >

                {Icon && (
                    <Icon
                        size={20}
                        className="text-slate-400"
                    />
                )}

                <input
                    className="
                        w-full
                        bg-transparent
                        text-white
                        placeholder:text-slate-500
                        outline-none
                    "
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />

            </motion.div>

        </div>
    );
}

export default Input;