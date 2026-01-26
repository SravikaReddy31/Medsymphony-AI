from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import symptom_routes  # adjust import if needed

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsymphony.in",
        "https://www.medsymphony.in",
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(symptom_routes.router)
