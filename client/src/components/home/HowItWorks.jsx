import { GitBranch, Database, BrainCircuit, MessageSquare } from "lucide-react";

const steps = [
    {
        icon: GitBranch,
        title: "Add Repository",
    },
    {
        icon: Database,
        title: "AI Indexes Code",
    },
    {
        icon: BrainCircuit,
        title: "Builds Knowledge Base",
    },
    {
        icon: MessageSquare,
        title: "Ask Questions",
    },
];

function HowItWorks() {

    return (

        <section className="py-24">

            <div className="mx-auto max-w-6xl px-6">

                <h2 className="mb-20 text-center text-4xl font-bold text-white">

                    How It Works

                </h2>

                <div className="grid gap-8 md:grid-cols-4">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <div
                                key={index}
                                className="text-center"
                            >

                                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500">

                                    <Icon size={34} />

                                </div>

                                <h3 className="font-semibold text-white">

                                    {step.title}

                                </h3>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;