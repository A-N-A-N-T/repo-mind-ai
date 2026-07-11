from dataclasses import dataclass


@dataclass(frozen=True)
class SourceFile:
    id: str
    path: str
    name: str
    extension: str
    language: str
    size: int
    content: str


@dataclass(frozen=True)
class SearchResult:

    content: str

    path: str

    language: str

    score: float | None