from langchain_huggingface import HuggingFaceEmbeddings
from app.core.settings import EMBEDDING_MODEL
from app.core.logger import setup_logger

logger = setup_logger()

class EmbeddingService:

    _embedding_model = None

    @classmethod
    def get_embeddings(cls):

        if cls._embedding_model is None:

            try:

                logger.info(f"Loading embedding model: {EMBEDDING_MODEL}")

                cls._embedding_model = HuggingFaceEmbeddings(
                    model_name=EMBEDDING_MODEL,
                    model_kwargs={
                        "device": "cpu"
                    },
                    encode_kwargs={
                        "normalize_embeddings": True
                    }
                )

                logger.info("Embedding model loaded successfully.")

            except Exception as e:

                logger.exception("Failed to load embedding model.")

                raise e

        return cls._embedding_model