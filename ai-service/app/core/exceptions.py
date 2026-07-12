class RepositoryNotFoundException(Exception):

    def __init__(self, message="Repository not found"):
        self.message = message


class VectorStoreNotFoundException(Exception):

    def __init__(self):
        self.message = "Vector store not found"


class RepositoryCloneException(Exception):

    def __init__(self, message):
        self.message = message

