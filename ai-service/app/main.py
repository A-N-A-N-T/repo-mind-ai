from fastapi import FastAPI
from app.api.repository import router as repository_router
from fastapi.exceptions import RequestValidationError
from app.core.logger import setup_logger
from fastapi import HTTPException
from fastapi.exceptions import RequestValidationError
from app.api.debug import router as debug_router

from app.core.exception_handlers import (
    http_exception_handler,
    validation_exception_handler,
    global_exception_handler,
)


logger = setup_logger()

app = FastAPI(
    title="RepoMind AI Service",
    version="1.0.0"
)

app.include_router(repository_router)
app.include_router(debug_router)

app.add_exception_handler(
    HTTPException,
    http_exception_handler,
)

app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler,
)

app.add_exception_handler(
    Exception,
    global_exception_handler,
)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "RepoMind AI Service Running"
    }