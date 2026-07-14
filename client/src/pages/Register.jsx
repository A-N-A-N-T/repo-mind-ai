import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    User,
    BrainCircuit,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { register } from "../api/auth.api";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {

        document.title = "Register | RepoMind AI";

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

            await register(form);

            toast.success("Registration successful");

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Registration failed"
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

            {/* Card */}

            <div className="relative z-10 w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl backdrop-blur">

                <h1 className="text-center text-4xl font-bold text-white">

                    Create Account 🚀

                </h1>

                <p className="mt-3 text-center text-slate-400">

                    Create your RepoMind AI account

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    <Input
                        label="Full Name"
                        icon={User}
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Email"
                        icon={Mail}
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Password"
                        icon={Lock}
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        loading={loading}
                    >

                        Register

                    </Button>

                </form>

                <p className="mt-8 text-center text-slate-400">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="font-semibold text-cyan-400 hover:text-cyan-300"
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;