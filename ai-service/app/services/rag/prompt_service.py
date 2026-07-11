from app.prompts.chat_prompt import CHAT_PROMPT


class PromptService:

    @staticmethod
    def build(

        context: str,

        question: str,

    ):

        return CHAT_PROMPT.format_messages(

            context=context,

            question=question,

        )