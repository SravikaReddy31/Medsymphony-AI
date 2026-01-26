from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import hospitals, symptom_checker

app = FastAPI()

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

app.include_router(symptom_checker.router)
app.include_router(hospitals.router)   # ✅ VERY IMPORTANT
