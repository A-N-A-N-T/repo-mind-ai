from app.models.rag.search_result import SearchResult


class ContextBuilder:

    @staticmethod
    def build(results: list[SearchResult]) -> str:

        sections = []

        for result in results:

            sections.append(

                f"""
File: {result.path}
Language: {result.language}

----------------------------------------

{result.content}

========================================
""".strip()

            )

        return "\n\n".join(sections)