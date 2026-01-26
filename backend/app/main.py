from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import symptoms_checker  # adjust name if needed

app = FastAPI()

# ✅ CORS MUST BE HERE (before include_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsymphony.in",
        "https://www.medsymphony.in"
    ],
    allow_credentials=True,
    allow_methods=["*"],   # 👈 includes OPTIONS
    allow_headers=["*"],
)

# ✅ then include routers
app.include_router(symptoms_checker.router)
