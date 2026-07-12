from fastapi import Request
from fastapi.responses import JSONResponse

@app.exception_handler(RepositoryNotFoundException)
async def repository_exception_handler(request, exc):

    return JSONResponse(

        status_code=404,

        content={

            "success": False,

            "message": exc.message,

        },

    )