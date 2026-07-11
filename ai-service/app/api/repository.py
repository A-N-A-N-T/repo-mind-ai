from fastapi import APIRouter, HTTPException

from pydantic import BaseModel

from app.schemas.repository import (
    RepositoryRequest,
    RepositoryResponse,
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

        repository = clone_repository(
            data.repositoryId,
            str(data.repoUrl)
        )

        return {
            "success": True,
            **repository,
        }

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )



@router.get("/load")

def load():

    loader = RepositoryLoader("temp/repo-test-1")

    files = loader.load()

    return {
        "totalFiles": len(files)
    }


@router.get("/documents")
def documents():

    loader = RepositoryLoader("temp/repo-test-1")

    source_files = loader.load()

    documents = DocumentService.convert(source_files)

    return {

        "sourceFiles": len(source_files),

        "documents": len(documents),

        "firstDocument": documents[0].metadata

    }


@router.get("/chunks")
def chunks():

    loader = RepositoryLoader("temp/repo-test-1")

    source_files = loader.load()

    documents = DocumentService.convert(source_files)

    chunk_service = ChunkService()

    chunks = chunk_service.split_documents(documents)

    return {

        "documents": len(documents),

        "chunks": len(chunks),

        "firstChunk": chunks[0].metadata,

    }

@router.get("/embedding-test")
def embedding_test():

    embeddings = EmbeddingService.get_embeddings()

    vector = embeddings.embed_query(
        "What is JWT authentication?"
    )

    return {

        "dimension": len(vector),

        "first10": vector[:10]

    }


@router.get("/index")
def create_index():

    indexing = IndexingService()

    result = indexing.build_index(
        "temp/repo-test-1"
    )

    return result


@router.get("/search")
def search():

    service = SearchService()

    results = service.search(
        repository_path="temp/repo-test-1",
        query="How is JWT authentication implemented?"
    )

    return {

        "matches": len(results),

        "results": [

            {

                "path": r.path,

                "language": r.language,

                "preview": r.content[:250]

            }

            for r in results

        ]

    }


@router.get("/context")
def context():

    results = SearchService().search(
        repository_path="temp/repo-test-1",
        query="How does JWT work?"
    )

    context = ContextBuilder.build(results)

    return {
        "length": len(context),
        "preview": context[:1000]
    }


@router.get("/prompt")
def prompt():

    results = SearchService().search(

        "temp/repo-test-1",

        "How does JWT authentication work?"

    )

    context = ContextBuilder.build(results)

    prompt = PromptService.build(

        context,

        "How does JWT authentication work?"

    )

    return {

        "messages":[

            {

                "type":type(message).__name__,

                "content":message.content

            }

            for message in prompt

        ]

    }


@router.get("/llm-test")
def llm_test():

    llm = LLMService.get_llm()

    response = llm.invoke("Say hello in one sentence.")

    return {

        "response": response.content

    }


@router.post("/chat-test")
def chat():

    service = ChatService()

    return service.chat(
        repository_path="temp/repo-test-1",
        question="How does JWT authentication work?"
    )