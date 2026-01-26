from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import symptoms_checker

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

app.include_router(symptoms_checker.router)
