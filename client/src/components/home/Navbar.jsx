import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >

                    <BrainCircuit
                        size={34}
                        className="text-cyan-400"
                    />

                    <span className="text-2xl font-bold text-white">

                    <div>

                        <h1 className="text-xl font-bold text-white">

                            RepoMind AI

                        </h1>

                        <p className="text-xs text-slate-400">

                            AI Code Assistant

                        </p>

                    </div>

                    </span>

                </Link>

                <div className="flex items-center gap-4">

                    <Link
                        to="/login"
                        className="text-slate-300 transition hover:text-cyan-400"
                    >

                        Login

                    </Link>

                    <Link
                        to="/register"
                        className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600"
                    >

                        Register

                    </Link>

                </div>

            </div>

        </header>

    );

}

export default Navbar;