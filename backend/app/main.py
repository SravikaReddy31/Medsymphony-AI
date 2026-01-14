from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import symptom_checker, first_aid
from app.routes import hospitals
app = FastAPI(title="MedSymphony API")
# ✅ CORS FIX (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # allow OPTIONS, POST, GET
    allow_headers=["*"],
)
# Routes
app.include_router(symptom_checker.router, prefix="/api")
app.include_router(first_aid.router, prefix="/api")
app.include_router(hospitals.router, prefix="/api")
@app.get("/")
def root():
    return {"message": "MedSymphony Backend is running"}
