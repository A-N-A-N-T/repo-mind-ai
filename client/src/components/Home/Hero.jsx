import { motion } from "framer-motion";
import {
    ArrowRight,
    Bot,
    User,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]">

            {/* Background Grid */}

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glow Effects */}

            <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

            {/* Floating Tech Badges */}

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-12 top-40 hidden rounded-full border border-cyan-500/30 bg-slate-900/70 px-5 py-3 text-cyan-300 backdrop-blur lg:block"
            >
                ⚡ LangChain
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute right-16 top-32 hidden rounded-full border border-cyan-500/30 bg-slate-900/70 px-5 py-3 text-cyan-300 backdrop-blur lg:block"
            >
                🚀 FastAPI
            </motion.div>

            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-20 left-24 hidden rounded-full border border-cyan-500/30 bg-slate-900/70 px-5 py-3 text-cyan-300 backdrop-blur lg:block"
            >
                🧠 Mistral AI
            </motion.div>

            {/* Hero Content */}

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >

                    <div className="mb-6 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-cyan-300">

                        🚀 AI Powered GitHub Repository Assistant

                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl font-black leading-tight text-white md:text-7xl"
                    >

                        Understand Any

                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                            GitHub Repository

                        </span>

                        Using AI

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
                    >

                        Analyze repositories using Retrieval-Augmented Generation,
                        semantic search, and AI-powered conversations.

                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >

                        <Link
                            to="/register"
                            className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]"
                        >

                            Get Started

                            <ArrowRight size={20} />

                        </Link>

                        <Link
                            to="/login"
                            className="rounded-2xl border border-slate-700 px-7 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-500"
                        >

                            Login

                        </Link>

                    </motion.div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="hidden lg:block"
                >

                    <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-[0_0_60px_rgba(6,182,212,0.15)]">

                        {/* Window */}

                        <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-5 py-4">

                            <div className="h-3 w-3 rounded-full bg-red-500"></div>

                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

                            <div className="h-3 w-3 rounded-full bg-green-500"></div>

                            <span className="ml-4 text-sm text-slate-400">

                                RepoMind AI

                            </span>

                        </div>

                        {/* Chat */}

                        <div className="space-y-5 p-6">

                            <div className="flex justify-end">

                                <div className="flex items-end gap-3">

                                    <div className="rounded-2xl bg-cyan-500 px-5 py-3 text-white shadow-lg">

                                        Explain JWT Authentication

                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">

                                        <User
                                            size={18}
                                            className="text-white"
                                        />

                                    </div>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700">

                                    <Bot
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <div className="max-w-sm rounded-2xl bg-slate-800 px-5 py-4 text-slate-300 shadow-lg">

                                    JWT authentication works by generating a signed token after login.

                                    Every protected request includes this token in the Authorization header.

                                </div>

                            </div>

                            <div className="rounded-2xl border border-slate-700 bg-black p-4">

                                <div className="mb-3 flex items-center gap-2">

                                    <Sparkles
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    <span className="text-sm text-cyan-400">

                                        middleware/auth.js

                                    </span>

                                </div>

                                <pre className="overflow-x-auto text-sm text-green-400">

{`const token = req.headers.authorization;

jwt.verify(token, SECRET_KEY);

next();`}

                                </pre>

                            </div>

                            <div className="flex flex-wrap gap-2">

                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">

                                    auth.js

                                </span>

                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">

                                    middleware

                                </span>

                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">

                                    JWT

                                </span>

                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">

                                    Express

                                </span>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;