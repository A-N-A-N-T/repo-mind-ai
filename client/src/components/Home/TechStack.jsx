const tech = [

    "React",

    "Express",

    "FastAPI",

    "LangChain",

    "FAISS",

    "Mistral AI",

    "MongoDB",

    "Tailwind CSS",

];

function TechStack() {

    return (

        <section className="py-24">

            <div className="mx-auto max-w-5xl px-6">

                <h2 className="mb-12 text-center text-4xl font-bold text-white">

                    Built With

                </h2>

                <div className="flex flex-wrap justify-center gap-4">

                    {tech.map((item) => (

                        <span

                            key={item}

                            className="rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-300"

                        >

                            {item}

                        </span>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default TechStack;