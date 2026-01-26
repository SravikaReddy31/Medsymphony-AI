from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# import routers explicitly
from app.routes.symptoms_checker import router as symptom_router
from app.routes.hospitals import router as hospitals_router

app = FastAPI()

# CORS
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

# REGISTER ROUTES (THIS WAS MISSING)
app.include_router(symptom_router)
app.include_router(hospitals_router)
