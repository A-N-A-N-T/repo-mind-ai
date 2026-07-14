import { FileCode2 } from "lucide-react";

function SourceCard({ source }) {

    return (

        <div className="mt-3 rounded-2xl border border-slate-700 bg-slate-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10">

            <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">

                        <FileCode2
                            size={20}
                            className="text-cyan-400"
                        />

                    </div>

                    <div>

                        <p className="break-all text-sm font-semibold text-white">

                            {source.path || "Unknown File"}

                        </p>

                        <p className="mt-1 text-xs text-slate-500">

                            Source File

                        </p>

                    </div>

                </div>

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">

                    {source.language || "Text"}

                </span>

            </div>

        </div>

    );

}

export default SourceCard;