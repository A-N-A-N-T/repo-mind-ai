from pydantic import BaseModel, HttpUrl


class RepositoryRequest(BaseModel):
    repositoryId: str
    repoUrl: HttpUrl


class RepositoryResponse(BaseModel):
    success: bool
    owner: str
    repositoryName: str
    branch: str
    localPath: str