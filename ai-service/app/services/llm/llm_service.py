from langchain_mistralai.chat_models import ChatMistralAI
from dotenv import load_dotenv



from app.core.settings import (
    LLM_MODEL,
    LLM_TEMPERATURE,
)

import os

load_dotenv()
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")
if not MISTRAL_API_KEY:
    raise RuntimeError("MISTRAL_API_KEY is not set")

class LLMService:

    _llm = None

    @classmethod
    def get_llm(cls):

        if cls._llm is None:

            cls._llm = ChatMistralAI(

                model=LLM_MODEL,

                temperature=LLM_TEMPERATURE,

                api_key=MISTRAL_API_KEY,

            )

        return cls._llm