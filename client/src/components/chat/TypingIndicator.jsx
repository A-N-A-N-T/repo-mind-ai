import { LoaderCircle } from "lucide-react";

function TypingIndicator() {

    return (

        <div className="mb-5 flex">

            <div className="rounded-xl bg-slate-800 px-5 py-4">

                <LoaderCircle
                    className="animate-spin text-cyan-400"
                />

            </div>

        </div>

    );

}

export default TypingIndicator;