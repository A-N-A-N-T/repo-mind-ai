import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { User, Bot } from "lucide-react";

import SourceCard from "./SourceCard";

function ChatMessage({ message }) {

    return (

        <div
            className={`mb-6 flex items-start gap-3 ${
                message.role === "user"
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            {/* Assistant Avatar */}

            {message.role === "assistant" && (

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500">

                    <Bot
                        size={20}
                        className="text-white"
                    />

                </div>

            )}

            {/* Message */}

            <div
                className={`max-w-4xl rounded-2xl px-5 py-4 shadow-lg ${
                    message.role === "user"
                        ? "bg-cyan-500 text-white"
                        : "border border-slate-700 bg-slate-800 text-white"
                }`}
            >

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({
                            inline,
                            className,
                            children,
                            ...props
                        }) {

                            const match = /language-(\w+)/.exec(
                                className || ""
                            );

                            return !inline && match ? (

                                <SyntaxHighlighter
                                    style={oneDark}
                                    language={match[1]}
                                    PreTag="div"
                                >

                                    {String(children).replace(/\n$/, "")}

                                </SyntaxHighlighter>

                            ) : (

                                <code
                                    className={`${className} rounded bg-slate-900 px-1 py-0.5`}
                                    {...props}
                                >

                                    {children}

                                </code>

                            );

                        },
                    }}
                >

                    {message.content}

                </ReactMarkdown>

                {

                    message.sources?.length > 0 && (

                        <div className="mt-6">

                            <h3 className="mb-3 font-semibold text-cyan-400">

                                Sources

                            </h3>

                            <div className="space-y-2">

                                {

                                    message.sources.map((source, index) => (

                                        <SourceCard
                                            key={index}
                                            source={source}
                                        />

                                    ))

                                }

                            </div>

                        </div>

                    )

                }

            </div>

            {/* User Avatar */}

            {message.role === "user" && (

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700">

                    <User
                        size={20}
                        className="text-white"
                    />

                </div>

            )}

        </div>

    );

}

export default ChatMessage;