import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import RepositoryCard from "../components/repository/RepositoryCard";
import AddRepositoryModal from "../components/repository/AddRepositoryModal";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";

import {
    getRepositories,
    deleteRepository,
} from "../api/repository.api";

function Dashboard() {

    const navigate = useNavigate();

    const [repositories, setRepositories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        document.title = "Dashboard | RepoMind AI";

        fetchRepositories();

    }, []);

    async function fetchRepositories() {

        try {

            setLoading(true);

            const response = await getRepositories();

            setRepositories(response.data);

        } catch {

            toast.error("Unable to fetch repositories");

        } finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this repository?")) return;

        try {

            await deleteRepository(id);

            toast.success("Repository deleted");

            fetchRepositories();

        } catch {

            toast.error("Delete failed");

        }

    }

    function handleOpen(repository) {

        navigate(`/repository/${repository._id}`);

    }

    const filteredRepositories = repositories.filter((repo) =>
        repo.repoName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (

        <DashboardLayout>

            {/* Header */}

            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">

                        Dashboard

                    </h1>

                    <p className="mt-2 text-slate-400">

                        {repositories.length} Repository{repositories.length !== 1} available

                    </p>

                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                    <div className="relative">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search repository..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 sm:w-80"
                        />

                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
                    >

                        <Plus size={18} />

                        Add Repository

                    </button>

                </div>

            </div>

            {/* Content */}

            {

                loading ? (

                    <Loader text="Loading repositories..." />

                ) : filteredRepositories.length === 0 ? (

                    <EmptyState

                        title={
                            searchTerm
                                ? "No matching repository"
                                : "No Repository Found"
                        }

                        description={
                            searchTerm
                                ? "Try searching with another repository name."
                                : "Add your first GitHub repository to get started."
                        }

                    >

                        {

                            !searchTerm && (

                                <button

                                    onClick={() => setShowModal(true)}

                                    className="mt-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"

                                >

                                    Add Repository

                                </button>

                            )

                        }

                    </EmptyState>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {

                            filteredRepositories.map((repository) => (

                                <RepositoryCard

                                    key={repository._id}

                                    repository={repository}

                                    onDelete={handleDelete}

                                    onOpen={handleOpen}

                                />

                            ))

                        }

                    </div>

                )

            }

            <AddRepositoryModal

                open={showModal}

                onClose={() => setShowModal(false)}

                onSuccess={fetchRepositories}

            />

        </DashboardLayout>

    );

}

export default Dashboard;