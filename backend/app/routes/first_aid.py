from fastapi import APIRouter, HTTPException
from app.schemas.first_aid_schema import FirstAidRequest
from app.services.first_aid_ai import generate_first_aid

router = APIRouter()

@router.post("/api/first-aid")
def first_aid(data: FirstAidRequest):
    try:
        result = generate_first_aid(data.problem)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
