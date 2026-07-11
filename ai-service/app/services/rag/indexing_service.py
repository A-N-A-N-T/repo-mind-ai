from app.services.repository.repository_loader import RepositoryLoader
from app.services.rag.document_service import DocumentService
from app.services.rag.chunk_service import ChunkService
from app.services.rag.vector_store_service import VectorStoreService


class IndexingService:

    def __init__(self):

        self.loader = None

        self.chunk_service = ChunkService()

        self.vector_service = VectorStoreService()

    def build_index(
        self,
        repository_path: str,
    ):

        # Load Repository

        self.loader = RepositoryLoader(repository_path)

        source_files = self.loader.load()

        # Convert to Documents

        documents = DocumentService.convert(source_files)

        # Create Chunks

        chunks = self.chunk_service.split_documents(
            documents
        )

        # Create FAISS

        vector_store = self.vector_service.create(
            chunks
        )

        # Save Index

        self.vector_service.save(
            vector_store,
            repository_path,
        )

        return {

            "files": len(source_files),

            "documents": len(documents),

            "chunks": len(chunks),

            "vectorStore": True,

        }