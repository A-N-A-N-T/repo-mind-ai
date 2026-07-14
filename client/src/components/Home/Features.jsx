import { BrainCircuit, Search, Database, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: BrainCircuit,
        title: "AI Repository Analysis",
        description:
            "Automatically understand the complete structure and logic of any GitHub repository.",
    },
    {
        icon: Search,
        title: "Semantic Search",
        description:
            "Find relevant code intelligently instead of relying on keyword matching.",
    },
    {
        icon: Database,
        title: "RAG Powered",
        description:
            "Uses LangChain, FAISS and Mistral AI for accurate contextual answers.",
    },
    {
        icon: MessageSquare,
        title: "Chat with Code",
        description:
            "Ask questions in natural language and get instant explanations.",
    },
];

function Features() {

    return (

        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                <motion.h2

                    initial={{ opacity: 0, y: 20 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    className="mb-16 text-center text-4xl font-bold text-white"

                >

                    Why RepoMind AI?

                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: index * 0.1 }}

                                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-cyan-500"

                            >

                                <Icon
                                    size={42}
                                    className="mb-6 text-cyan-400"
                                />

                                <h3 className="mb-3 text-xl font-semibold text-white">

                                    {feature.title}

                                </h3>

                                <p className="leading-7 text-slate-400">

                                    {feature.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Features;