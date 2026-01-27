from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.symptoms_checker import router as symptoms_router
from app.routes.first_aid import router as first_aid_router
from app.routes.hospitals import router as hospitals_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsymphony.in",
        "https://www.medsymphony.in",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(symptoms_router)
app.include_router(first_aid_router)
app.include_router(hospitals_router)

@app.get("/health")
def health():
    return {"status": "ok"}

