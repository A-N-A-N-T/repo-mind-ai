import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    BrainCircuit,
    Database,
    Search,
    GitBranch,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useAuth } from "../hooks/useAuth";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {

        document.title = "Login | RepoMind AI";

    }, []);

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            await login(
                form.email,
                form.password
            );

            toast.success("Welcome back!");

            navigate("/dashboard");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Invalid email or password"
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

            {/* Home Logo */}

            <Link
                to="/"
                className="absolute left-6 top-6 z-30 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 backdrop-blur transition hover:border-cyan-500"
            >

                <BrainCircuit
                    size={24}
                    className="text-cyan-400"
                />

                <span className="font-semibold text-white">

                    RepoMind AI

                </span>

            </Link>

            {/* Background Glow */}

            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur lg:grid-cols-2">

                {/* Left Section */}

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hidden bg-gradient-to-br from-cyan-500 to-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-between"
                >

                    <div>

                        <h1 className="text-5xl font-extrabold">

                            RepoMind AI

                        </h1>

                        <p className="mt-6 text-lg leading-8 text-cyan-100">

                            Understand any GitHub repository using
                            AI-powered semantic search and code analysis.

                        </p>

                    </div>

                    <div className="space-y-5">

                        <Feature
                            icon={BrainCircuit}
                            text="RAG Pipeline"
                        />

                        <Feature
                            icon={Search}
                            text="Semantic Search"
                        />

                        <Feature
                            icon={Database}
                            text="FastAPI + FAISS"
                        />

                        <Feature
                            icon={GitBranch}
                            text="GitHub Repository Analysis"
                        />

                    </div>

                </motion.div>

                {/* Right Section */}

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center p-8 sm:p-12"
                >

                    <div className="w-full max-w-md">

                        <h2 className="text-4xl font-bold text-white">

                            Welcome Back 👋

                        </h2>

                        <p className="mt-3 text-slate-400">

                            Sign in to continue to RepoMind AI

                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6"
                        >

                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                icon={Mail}
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <Input
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                icon={Lock}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                loading={loading}
                            >

                                Login

                            </Button>

                        </form>

                        <p className="mt-8 text-center text-slate-400">

                            Don't have an account?{" "}

                            <Link
                                to="/register"
                                className="font-semibold text-cyan-400 hover:text-cyan-300"
                            >

                                Register

                            </Link>

                        </p>

                    </div>

                </motion.div>

            </div>

        </div>

    );

}

function Feature({ icon: Icon, text }) {

    return (

        <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur">

            <Icon size={24} />

            <span className="text-lg">

                {text}

            </span>

        </div>

    );

}

export default Login;