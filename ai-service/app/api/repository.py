from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.schemas.repository import (
    RepositoryRequest,
    RepositoryResponse,
)
from app.services.github_service import clone_repository

router = APIRouter(
    prefix="/repository",
    tags=["Repository"]
)


class RepositoryRequest(BaseModel):
    repositoryId: str
    repoUrl: str

@router.post("/analyze", response_model=RepositoryResponse)
async def analyze_repository(data: RepositoryRequest):

    try:

        repository = clone_repository(
            data.repositoryId,
            str(data.repoUrl)
        )

        return {
            "success": True,
            **repository,
        }

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )