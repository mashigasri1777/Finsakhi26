import uuid
from datetime import datetime, timezone
from typing import Dict

from pydantic import BaseModel, Field


def _uid() -> str:
    return str(uuid.uuid4())


def _now() -> datetime:
    return datetime.now(timezone.utc)


class SurveyResponseCreate(BaseModel):
    language: str = "en"
    profile: Dict[str, str] = Field(default_factory=dict)
    answers: Dict[str, str] = Field(default_factory=dict)


class SurveyResponse(SurveyResponseCreate):
    id: str = Field(default_factory=_uid)
    created_at: datetime = Field(default_factory=_now)


class QuizAttemptCreate(BaseModel):
    language: str = "en"
    score: int
    total: int = 10


class QuizAttempt(QuizAttemptCreate):
    id: str = Field(default_factory=_uid)
    created_at: datetime = Field(default_factory=_now)


