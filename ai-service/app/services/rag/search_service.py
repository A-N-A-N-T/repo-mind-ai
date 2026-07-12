from app.services.rag.vector_store_service import VectorStoreService
from app.models.rag.search_result import SearchResult
from app.core.settings import SEARCH_TOP_K

class SearchService:

    def __init__(self):

        self.vector_service = VectorStoreService()

    def search(
        self,
        repository_path: str,
        query: str,
        k: int = SEARCH_TOP_K,
    ):

        vector_store = self.vector_service.load(
            repository_path
        )

        retriever = vector_store.as_retriever(
            search_type="similarity",
            search_kwargs={
                "k": k,
            },
        )

        documents = retriever.invoke(query)

        results = []

        for document in documents:

            results.append(

                SearchResult(

                    file_id=document.metadata["file_id"],

                    path=document.metadata["path"],

                    language=document.metadata["language"],

                    extension=document.metadata["extension"],

                    content=document.page_content,

                )

            )

        return results

