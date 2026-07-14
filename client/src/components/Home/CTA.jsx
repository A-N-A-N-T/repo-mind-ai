import { Link } from "react-router-dom";

function CTA() {

    return (

        <section className="py-28">

            <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-600 to-blue-600 p-16 text-center">

                <h2 className="text-5xl font-bold text-white">

                    Ready to Chat with Your Code?

                </h2>

                <p className="mt-6 text-lg text-cyan-100">

                    Start analyzing GitHub repositories with AI in seconds.

                </p>

                <Link

                    to="/register"

                    className="mt-10 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"

                >

                    Get Started

                </Link>

            </div>

        </section>

    );

}

export default CTA;