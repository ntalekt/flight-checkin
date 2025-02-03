from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import CheckInRequest
from .utils import execute_checkin
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Flight Check-In API", version="2.0", docs_url="/api/docs")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/checkin")
async def check_in(request: CheckInRequest):
    command = [
        "python",
        "auto-southwest-check-in/southwest.py",
        request.confirmation,
        request.first_name,
        request.last_name,
    ]
    return execute_checkin(command)


@app.get("/health")
async def health_check():
    return {"status": "ok", "version": "2.0"}
