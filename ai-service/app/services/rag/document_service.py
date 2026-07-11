from langchain_core.documents import Document

from app.models.source_file import SourceFile


class DocumentService:

    @staticmethod
    def convert(source_files: list[SourceFile]):

        documents = []

        for source in source_files:

            documents.append(

                Document(

                    page_content=source.content,

                    metadata={

                        "file_id": source.id,

                        "path": source.path,

                        "name": source.name,

                        "language": source.language,

                        "extension": source.extension,

                        "size": source.size,

                    },

                )

            )

        return documents