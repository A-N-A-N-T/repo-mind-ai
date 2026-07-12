from app.services.rag.search_service import SearchService
from app.services.rag.context_builder import ContextBuilder
from app.services.rag.prompt_service import PromptService
from app.services.llm.llm_service import LLMService


class ChatService:

    def __init__(self):

        self.search_service = SearchService()

        self.llm = LLMService.get_llm()

    def chat(
        self,
        repository_path: str,
        question: str,
    ):

        # Retrieve relevant chunks
        results = self.search_service.search(
            repository_path=repository_path,
            query=question,
        )

        # Build context
        context = ContextBuilder.build(results)

        # Build prompt
        messages = PromptService.build(
            context=context,
            question=question,
        )

        # Call LLM
        response = self.llm.invoke(messages)


        return {
            "answer": response.content,
            "retrieved_chunks": len(results),
            "sources": [
                {
                    "path": result.path,
                    "language": result.language,
                }
                for result in results
            ],
        }