import { LogOut, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

function DashboardLayout({ children }) {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {

        logout();

        navigate("/login");

    }

    return (

        <div className="min-h-screen bg-slate-950">

            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    <div
                        className="flex cursor-pointer items-center gap-3"
                        onClick={() => navigate("/dashboard")}
                    >

                        <BrainCircuit
                            className="text-cyan-400"
                            size={34}
                        />

                        <div>

                            <h1 className="text-2xl font-bold text-white">

                                RepoMind AI

                            </h1>

                            <p className="text-sm text-slate-400">

                                AI Repository Assistant

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-6">

                        <div className="hidden text-right sm:block">

                            <p className="font-medium text-white">

                                {user?.name}

                            </p>

                            <p className="text-sm text-slate-400">

                                {user?.email}

                            </p>

                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                        >

                            <LogOut size={18} />

                            Logout

                        </button>

                    </div>

                </div>

            </header>

            <main className="mx-auto max-w-7xl px-6 py-8">

                {children}

            </main>

        </div>

    );

}

export default DashboardLayout;