from pydantic import BaseModel


class ChatRequest(BaseModel):

    repository_path: str

    question: str


class ChatSource(BaseModel):

    path: str

    language: str


class ChatResponse(BaseModel):

    answer: str

    retrieved_chunks: int

    sources: list[ChatSource]