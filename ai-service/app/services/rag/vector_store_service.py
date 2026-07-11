from pathlib import Path

from langchain_community.vectorstores import FAISS

from app.services.rag.embedding_service import EmbeddingService


class VectorStoreService:

    def __init__(self):

        self.embeddings = EmbeddingService.get_embeddings()


    def create(self, documents):

        return FAISS.from_documents(
            documents,
            self.embeddings,
        )


    def save(
        self,
        vector_store,
        repository_path: str,
    ):

        save_path = (
            Path(repository_path)
            / "vectorstore"
        )

        save_path.mkdir(
            parents=True,
            exist_ok=True,
        )

        vector_store.save_local(
            str(save_path)
        )


    def load(
       self,
       repository_path: str,
    ):

        save_path = (
            Path(repository_path)
            / "vectorstore"
        )

        return FAISS.load_local(
            str(save_path),
            self.embeddings,
            allow_dangerous_deserialization=True,
        )

    def exists(
        self,
        repository_path: str,
    ):

        return (
            Path(repository_path)
            / "vectorstore"
            / "index.faiss"
        ).exists()
       
        
    def get_retriever(
        self,
        vector_store,
    ):

        return vector_store.as_retriever(

            search_type="similarity",

            search_kwargs={

                "k": 5,

            },

        )