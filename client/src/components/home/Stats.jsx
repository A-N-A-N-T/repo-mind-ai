import { BrainCircuit, GitBranch, Database, MessageSquare } from "lucide-react";

const stats = [
    {
        icon: GitBranch,
        number: "GitHub",
        label: "Repository Analysis",
    },
    {
        icon: Database,
        number: "FAISS",
        label: "Vector Search",
    },
    {
        icon: BrainCircuit,
        number: "Mistral",
        label: "LLM Powered",
    },
    {
        icon: MessageSquare,
        number: "24/7",
        label: "AI Assistant",
    },
];

function Stats() {

    return (

        <section className="py-16">

            <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

                {stats.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={index}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500"
                        >

                            <Icon
                                className="mx-auto mb-4 text-cyan-400"
                                size={40}
                            />

                            <h3 className="text-3xl font-bold text-white">

                                {item.number}

                            </h3>

                            <p className="mt-2 text-slate-400">

                                {item.label}

                            </p>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}

export default Stats;