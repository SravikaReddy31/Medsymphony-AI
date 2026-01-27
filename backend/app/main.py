from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.symptoms_checker import router as symptoms_router
from app.routes.first_aid import router as first_aid_router
from app.routes.hospitals import router as hospitals_router

app = FastAPI()

# ✅ MUST BE SIMPLE GET — NO DEPENDENCIES
@app.get("/health", include_in_schema=False)
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

# ✅ ROUTES
app.include_router(symptoms_router)
app.include_router(first_aid_router)
app.include_router(hospitals_router)
