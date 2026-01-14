from fastapi import APIRouter
from app.services.hospitals_data import hospitals
router = APIRouter()
@router.get("/hospitals")
def get_hospitals():
    return hospitals
