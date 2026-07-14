import { BrainCircuit } from "lucide-react";

function FullScreenLoader() {

    return (

        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950">

            <BrainCircuit
                size={56}
                className="animate-pulse text-cyan-400"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">

                RepoMind AI

            </h2>

            <p className="mt-2 text-slate-400">

                Loading...

            </p>

        </div>

    );

}

export default FullScreenLoader;