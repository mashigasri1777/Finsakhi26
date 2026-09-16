from datetime import timezone
from typing import List

from fastapi import APIRouter

from lib.db import db
from models.engagement_models import (
    QuizAttempt,
    QuizAttemptCreate,
    SurveyResponse,
    SurveyResponseCreate,
)

router = APIRouter()


def _utc(doc: dict) -> dict:
    # motor returns naive datetimes â€” normalise on read so JS parses them.
    if doc.get("created_at") is not None:
        doc["created_at"] = doc["created_at"].replace(tzinfo=timezone.utc)
    return doc


@router.post("/survey-responses", response_model=SurveyResponse, status_code=201)
async def create_survey_response(input: SurveyResponseCreate):
    obj = SurveyResponse(**input.model_dump())
    await db.survey_responses.insert_one(obj.model_dump())
    return obj


@router.get("/survey-responses", response_model=List[SurveyResponse])
async def list_survey_responses():
    docs = await db.survey_responses.find().sort("created_at", -1).to_list(500)
    return [SurveyResponse(**_utc(doc)) for doc in docs]


@router.post("/quiz-attempts", response_model=QuizAttempt, status_code=201)
async def create_quiz_attempt(input: QuizAttemptCreate):
    obj = QuizAttempt(**input.model_dump())
    await db.quiz_attempts.insert_one(obj.model_dump())
    return obj


@router.get("/stats")
async def outreach_stats():
    surveys = await db.survey_responses.count_documents({})
    attempts = await db.quiz_attempts.count_documents({})
    rows = await db.quiz_attempts.aggregate(
        [{"$group": {"_id": None, "avg_score": {"$avg": "$score"}}}]
    ).to_list(1)
    avg = round(rows[0]["avg_score"], 2) if rows and rows[0].get("avg_score") is not None else 0
    return {"survey_responses": surveys, "quiz_attempts": attempts, "average_score": avg}


