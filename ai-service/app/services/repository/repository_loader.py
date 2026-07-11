from pathlib import Path
import hashlib

from app.core.settings import (
    SUPPORTED_EXTENSIONS,
    IGNORED_DIRECTORIES,
    MAX_FILE_SIZE,
    LANGUAGE_MAPPING,
)

from app.models.source_file import SourceFile


class RepositoryLoader:

    def __init__(self, repository_path: str):
        self.repository_path = Path(repository_path)

    def load(self):

        source_files = []

        for file in self.repository_path.rglob("*"):

            if not file.is_file():
                continue

            if self._should_skip(file):
                continue

            source = self._read_file(file)

            if source:
                source_files.append(source)

        return source_files


    def _should_skip(self, file: Path):

        if any(
            part in IGNORED_DIRECTORIES
            for part in file.parts
        ):
            return True

        if file.suffix.lower() not in SUPPORTED_EXTENSIONS:
            return True

        if file.stat().st_size > MAX_FILE_SIZE:
            return True

        return False
    

    def _read_file(self, file: Path):

        try:

            content = file.read_text(
                encoding="utf-8",
                errors="ignore",
            )

            relative_path = str(
                file.relative_to(self.repository_path)
            )

            extension = file.suffix.lower()

            language = LANGUAGE_MAPPING.get(
                extension,
                "unknown",
            )

            file_id = hashlib.md5(
                relative_path.encode()
            ).hexdigest()

            return SourceFile(
                id=file_id,
                path=relative_path,
                name=file.name,
                extension=extension,
                language=language,
                size=file.stat().st_size,
                content=content,
            )

        except Exception:

            return None