from pydantic import BaseModel, Field
from datetime import datetime


class CheckInRequest(BaseModel):
    confirmation: str = Field(..., pattern=r"^[A-Z0-9]{6}$")
    first_name: str = Field(..., min_length=2, max_length=50)
    last_name: str = Field(..., min_length=2, max_length=50)

    class Config:
        json_schema_extra = {
            "example": {
                "confirmation": "ABC123",
                "first_name": "John",
                "last_name": "Doe",
            }
        }


class CheckInResponse(BaseModel):
    status: str
    output: str
    timestamp: datetime = datetime.now()
    error: str | None = None
