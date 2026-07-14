import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

function ChatWindow({ messages, loading }) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    return (

        <div className="mb-6 h-[60vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">

            {
                messages.length === 0 && !loading ? (

                    <div className="mt-40 text-center text-slate-500">

                        Ask your first question...

                    </div>

                ) : (

                    <>
                        {
                            messages.map((message, index) => (

                                <ChatMessage
                                    key={index}
                                    message={message}
                                />

                            ))
                        }

                        {
                            loading && <TypingIndicator />
                        }
                    </>

                )
            }

            <div ref={bottomRef} />

        </div>

    );

}

export default ChatWindow;