from fastapi import APIRouter
from app.schemas.symptom_schema import SymptomRequest, SymptomResponse
from app.services.symptom_ai import analyze_symptoms

router = APIRouter()

@router.post("/analyze", response_model=SymptomResponse)
def analyze(request: SymptomRequest):
    return analyze_symptoms(request.text)
