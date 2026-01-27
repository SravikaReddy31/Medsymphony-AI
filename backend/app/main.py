from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.symptoms_checker import router as symptom_router
from app.routes.first_aid import router as first_aid_router
from app.routes.hospitals import router as hospital_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsymphony.in",
        "https://www.medsymphony.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],  # VERY IMPORTANT
    allow_headers=["*"],
)

# ✅ HEALTH CHECK (supports GET + HEAD)
@app.api_route("/health", methods=["GET", "HEAD"])
def health():
    return {"status": "ok"}

# Routers
app.include_router(symptom_router)
app.include_router(first_aid_router)
app.include_router(hospital_router)
