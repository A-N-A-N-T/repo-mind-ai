from langchain_core.documents import Document

from app.core.settings import (
    CHUNK_SIZE,
    CHUNK_OVERLAP,
    EMBEDDING_MODEL
)

from langchain_text_splitters import (
    RecursiveCharacterTextSplitter,
    Language,
    RecursiveCharacterTextSplitter,
)

class ChunkService:

    def __init__(self):

        self.default_splitter = RecursiveCharacterTextSplitter(
            chunk_size=CHUNK_SIZE,
            chunk_overlap=CHUNK_OVERLAP,
        )

    LANGUAGE_SPLITTERS = {

    "python": Language.PYTHON,

    "javascript": Language.JS,

    "typescript": Language.TS,

    "java": Language.JAVA,

    "cpp": Language.CPP,

    "go": Language.GO,

    "php": Language.PHP,

    }

    def split_document(self, document: Document):

        language = document.metadata.get("language")

        if language in self.LANGUAGE_SPLITTERS:

            splitter = RecursiveCharacterTextSplitter.from_language(

                language=self.LANGUAGE_SPLITTERS[language],

                chunk_size=1000,

                chunk_overlap=200,

            )

            return splitter.split_documents([document])

        return self.default_splitter.split_documents([document])

   
    def split_documents(
        self,
        documents: list[Document],
    ):

        chunks = []

        for document in documents:

            chunks.extend(
                self.split_document(document)
            )

        return chunks