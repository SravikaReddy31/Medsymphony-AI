from fastapi import APIRouter, HTTPException
from app.schemas.first_aid_schema import FirstAidRequest, FirstAidResponse
from app.services.first_aid_ai import generate_first_aid
router = APIRouter()
@router.post("/first-aid", response_model=FirstAidResponse)
def first_aid(data: FirstAidRequest):
    try:
        result = generate_first_aid(data.problem)
        return {"result": result}
    except Exception:
        raise HTTPException(status_code=500, detail="First aid service failed")

