from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.symptoms_checker import router as symptom_router
from app.routes.first_aid import router as first_aid_router
from app.routes.hospitals import router as hospital_router

app = FastAPI()

# ✅ HEALTH CHECK (THIS FIXES UPTIMEROBOT)
@app.get("/health")
def health():
    return {"status": "ok"}

# ✅ CORS
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

# ✅ ROUTERS
app.include_router(symptom_router)
app.include_router(first_aid_router)
app.include_router(hospital_router)
