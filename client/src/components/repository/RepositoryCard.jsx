import {
    Trash2,
    MessageCircle,
    CalendarDays,
    CircleCheckBig,
    LoaderCircle,
    GitBranch,
} from "lucide-react";

function RepositoryCard({

    repository,

    onDelete,

    onOpen,

}) {

    const completed = repository.status === "completed";

    return (

        <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.12)]">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                        <GitBranch
                            className="text-cyan-400"
                            size={28}
                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-white">

                            {repository.repoName}

                        </h2>

                        <p className="mt-1 text-sm text-slate-400">

                            {repository.owner}

                        </p>

                    </div>

                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        completed
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                    }`}
                >

                    {repository.status}

                </span>

            </div>

            {/* Info */}

            <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-sm text-slate-400">

                    {

                        completed ? (

                            <CircleCheckBig
                                size={16}
                                className="text-green-400"
                            />

                        ) : (

                            <LoaderCircle
                                size={16}
                                className="animate-spin text-yellow-400"
                            />

                        )

                    }

                    <span>

                        {

                            completed
                                ? "Repository analyzed successfully"
                                : "Analysis in progress"

                        }

                    </span>

                </div>

                {

                    repository.branch && (

                        <div className="flex items-center gap-2 text-sm text-slate-400">

                            🌿

                            <span>

                                {repository.branch}

                            </span>

                        </div>

                    )

                }

                <div className="flex items-center gap-2 text-sm text-slate-400">

                    <CalendarDays size={16} />

                    <span>

                        {new Date(repository.createdAt).toLocaleDateString()}

                    </span>

                </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex gap-3">

                <button
                    onClick={() => onOpen(repository)}
                    disabled={!completed}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all duration-300 ${
                        completed
                            ? "bg-cyan-500 text-white hover:-translate-y-1 hover:bg-cyan-600"
                            : "cursor-not-allowed bg-slate-700 text-slate-400"
                    }`}
                >

                    <MessageCircle size={18} />

                    Open Chat

                </button>

                <button
                    onClick={() => onDelete(repository._id)}
                    className="rounded-xl bg-red-500 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
                >

                    <Trash2 size={18} />

                </button>

            </div>

        </div>

    );

}

export default RepositoryCard;