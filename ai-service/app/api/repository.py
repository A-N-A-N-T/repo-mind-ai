from fastapi import APIRouter, HTTPException

from pydantic import BaseModel

from app.schemas.repository import (
    RepositoryRequest,
    RepositoryResponse,
)

from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
)

from app.services.repository.github_service import clone_repository
from app.services.rag.document_service import DocumentService
from app.services.repository.repository_loader import RepositoryLoader
from app.services.rag.chunk_service import ChunkService
from app.services.rag.embedding_service import EmbeddingService
from app.services.rag.vector_store_service import VectorStoreService
from app.services.rag.search_service import SearchService
from app.services.rag.context_builder import ContextBuilder
from app.services.rag.prompt_service import PromptService
from app.services.llm.llm_service import LLMService
from app.services.rag.chat_service import ChatService
from app.services.rag.indexing_service import IndexingService

router = APIRouter(
    prefix="/repository",
    tags=["Repository"]
)


class RepositoryRequest(BaseModel):
    repositoryId: str
    repoUrl: str


@router.post("/analyze", response_model=RepositoryResponse)
async def analyze_repository(data: RepositoryRequest):

    try:
        print("Step 1: Clone repository")

        repository = clone_repository(
            data.repositoryId,
            str(data.repoUrl)
        )

        print(repository)

        print("Step 2: Build index")

        indexing = IndexingService()

        indexing.build_index(
            repository["localPath"]
        )

        print("Step 3: Completed")

        return {
            "success": True,
            **repository,
        }

    except Exception as e:
        import traceback

        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Chat with an indexed repository",
    description="Answers questions using the indexed GitHub repository through the RAG pipeline.",
)
def chat(request: ChatRequest):

    service = ChatService()

    return service.chat(
        repository_path=request.repository_path,
        question=request.question,
    )