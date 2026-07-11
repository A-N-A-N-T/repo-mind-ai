from langchain_core.prompts import ChatPromptTemplate


CHAT_PROMPT = ChatPromptTemplate.from_messages(

    [

        (

            "system",

            """
You are RepoMind AI.

You answer questions about GitHub repositories.

Only answer using the provided repository context.

If the answer is not contained in the context,
say you don't know.

Always mention the file names
when referring to code.
""",

        ),

        (

            "human",

            """
Repository Context

{context}

----------------------------------------

Question

{question}
""",

        ),

    ]

)