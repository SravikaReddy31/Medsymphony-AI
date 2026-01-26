from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# ✅ IMPORT MUST MATCH FILE NAME EXACTLY
from app.routes.symptoms_checker import router as symptom_router

app = FastAPI()

# ✅ CORS MUST BE BEFORE include_router
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsymphony.in",
        "https://www.medsymphony.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ THIS LINE WAS MISSING (VERY IMPORTANT)
app.include_router(symptom_router)
