from langchain_huggingface import HuggingFaceEmbeddings
from app.core.settings import EMBEDDING_MODEL

class EmbeddingService:

    _embedding_model = None

    @classmethod
    def get_embeddings(cls):

        if cls._embedding_model is None:

            cls._embedding_model = HuggingFaceEmbeddings(

                model_name=EMBEDDING_MODEL,

                model_kwargs={
                    "device": "cpu"
                },

                encode_kwargs={
                    "normalize_embeddings": True
                }

            )

        return cls._embedding_model