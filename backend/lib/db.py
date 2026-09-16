"""Shared Mongo handle â€” import `client`/`db` from here (server.py, routers, seed.py)."""



import logging

import os

from pathlib import Path



from dotenv import load_dotenv

from motor.motor_asyncio import AsyncIOMotorClient

from pymongo import ASCENDING, DESCENDING, IndexModel



load_dotenv(Path(__file__).parent.parent / ".env")



mongo_url = os.environ["MONGO_URL"]

client = AsyncIOMotorClient(mongo_url)

db = client[os.environ["DB_NAME"]]



logger = logging.getLogger(__name__)



# One entry per collection: every field a route filters, sorts, or dedupes on. Applied by ensure_indexes() at startup.

INDEXES: dict[str, list[IndexModel]] = {

    "status_checks": [IndexModel([("timestamp", DESCENDING)], name="timestamp_desc")],

    "survey_responses": [IndexModel([("created_at", DESCENDING)], name="created_at_desc")],

    "quiz_attempts": [

        IndexModel([("created_at", DESCENDING)], name="created_at_desc"),

        IndexModel([("language", ASCENDING), ("created_at", DESCENDING)], name="lang_created"),

    ],

}





async def ensure_indexes() -> None:
    mongo_url = os.environ.get("MONGO_URL", "")

    # Skip database initialization when using local MongoDB
    # on a deployed server.
    if "localhost" in mongo_url or "127.0.0.1" in mongo_url:
        logger.warning(
            "MongoDB is configured as localhost. "
            "Skipping index creation on deployed environment."
        )
        return

    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logger.error(
                    "ensure_indexes(%s.%s): %s",
                    collection,
                    model.document["name"],
                    exc
                )





