from werkzeug.security import generate_password_hash, check_password_hash
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI, HTTPException
from schema import user_profile_schema
from dotenv import load_dotenv
from pydantic import BaseModel
from datetime import datetime
import os

load_dotenv()
uri = os.environ.get('MONGODB_URI')

# Create a new client and connect to the server
client = AsyncIOMotorClient(uri)  # MongoClient(uri)
db = client.CompassXP


class User(BaseModel):
    username: str
    password: str
    fullname: str
    compassxp_points: int = 0


app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/populate")
async def populate_users():
    users = db["users"]
    users.insert_one(user_profile_schema)
    print("users populated")


@app.get("/users")
async def get_users():
    users = []
    cursor = db.users.find({}, {"_id": 0})
    async for user in cursor:
        users.append(user)
    return users


@app.get("/users/{username}")
async def get_user(username: str):
    user = await db.users.find_one({"username": username}, {"_id": 0})
    if user:
        return user
    else:
        raise HTTPException(status_code=404, detail="User not found")
    

@app.post("/register")
async def register(user: User):
    existing_user = await db.users.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = generate_password_hash(user.password)
    user_data = {
        "username": user.username,
        "password_hash": hashed_password,
        "fullname": user.fullname,
        "compassxp_points": user.compassxp_points,
        "created_at": datetime.now().isoformat() + "Z"
    }
    await db.users.insert_one(user_data)
    return {"message": "User registered successfully"}


@app.post("/login")
async def login(user: User):
    existing_user = await db.users.find_one({"username": user.username})
    if not existing_user:
        raise HTTPException(
            status_code=400, detail="Invalid username or password")

    if check_password_hash(existing_user["password_hash"], user.password):
        return {"message": "Login successful"}
    else:
        raise HTTPException(
            status_code=400, detail="Invalid username or password")


@app.put("/update_user")
async def update_user(user: User):
    existing_user = await db.users.find_one({"username": user.username})
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")

    hashed_password = generate_password_hash(user.password)
    updated_user = {
        "username": user.username,
        "password_hash": hashed_password,
        "fullname": user.fullname,
        "compassxp_points": user.compassxp_points,
        "created_at": existing_user["created_at"]
    }
    await db.users.replace_one({"username": user.username}, updated_user)
    return {"message": "User updated successfully"}





if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
