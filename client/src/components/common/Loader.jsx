import { LoaderCircle } from "lucide-react";

function Loader({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <LoaderCircle
                size={40}
                className="animate-spin text-cyan-400"
            />

            <p className="mt-4 text-slate-400">
                {text}
            </p>
        </div>
    );
}

export default Loader;