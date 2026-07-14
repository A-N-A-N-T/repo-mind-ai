import { useState } from "react";
import toast from "react-hot-toast";

import { chatRepository } from "../../api/chat.api";

function ChatInput({

    repositoryId,

    setMessages,

    loading,

    setLoading,

}) {

    const [question, setQuestion] = useState("");

    

    async function handleSubmit(e) {

        e.preventDefault();

        if (!question.trim()) return;

        const userMessage = {

            role: "user",

            content: question,

        };

        setMessages((prev) => [

            ...prev,

            userMessage,

        ]);

        setQuestion("");

        try {

            setLoading(true);

            const response = await chatRepository({

                repositoryId,

                question,

            });

            setMessages((prev) => [

                ...prev,

                {

                    role: "assistant",

                    content: response.data.answer,

                    sources: response.data.sources,

                },

            ]);

        } catch {

            toast.error("Unable to get response");

        } finally {

            setLoading(false);

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="flex gap-4"
        >

            <input

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                placeholder="Ask about this repository..."

                className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none"

            />

            <button

                disabled={loading || !question.trim()}

                className="rounded-xl bg-cyan-500 px-6 text-white"

            >

                {

                    loading

                        ? "..."

                        : "Send"

                }

            </button>

        </form>

    );

}

export default ChatInput;