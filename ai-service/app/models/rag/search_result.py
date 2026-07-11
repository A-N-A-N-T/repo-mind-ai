from dataclasses import dataclass


@dataclass(frozen=True)
class SearchResult:
    file_id: str
    path: str
    language: str
    extension: str
    content: str