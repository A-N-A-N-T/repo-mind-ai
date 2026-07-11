from fastapi import FastAPI
from app.api.repository import router as repository_router

app = FastAPI(
    title="RepoMind AI Service",
    version="1.0.0"
)

app.include_router(repository_router)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "RepoMind AI Service Running"
    }