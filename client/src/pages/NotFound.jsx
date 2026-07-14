import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">

            <h1 className="text-8xl font-black text-cyan-400">

                404

            </h1>

            <h2 className="mt-4 text-3xl font-bold text-white">

                Page Not Found

            </h2>

            <p className="mt-4 max-w-md text-slate-400">

                The page you are looking for doesn't exist.

            </p>

            <Link
                to="/"
                className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >

                Go Home

            </Link>

        </div>

    );

}

export default NotFound;