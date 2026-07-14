import { FolderGit2 } from "lucide-react";

function EmptyState({
    title,
    description,
    children,
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12">

            <FolderGit2
                size={70}
                className="text-cyan-400"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">
                {title}
            </h2>

            <p className="mt-3 max-w-md text-center text-slate-400">
                {description}
            </p>

            <div className="mt-8">
                {children}
            </div>

        </div>
    );
}

export default EmptyState;