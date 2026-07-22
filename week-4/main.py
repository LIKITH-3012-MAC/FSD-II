from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import database

app = FastAPI(title="FSD-II Week-4 FastAPI API Framework")

# Initialize DB Table on startup
database.init_db()

# Pydantic Schema for Requests
class User(BaseModel):
    name: str
    email: str

# ==========================================
# 4.a. Hello World route display in browser
# ==========================================
@app.get("/")
def read_root():
    return {"message": "Hello World from FastAPI Backend"}

# ==========================================
# 4.b. Small API with multiple routes
# ==========================================
@app.get("/about")
def get_about():
    return {"module": "Full Stack Development - II", "unit": 4, "stack": "FastAPI + MySQL"}

@app.get("/services")
def get_services():
    return {"services": ["AI Pipeline API", "CRUD Services", "Database Integration"]}

# ==========================================
# 4.c. Print 'Hello World' in Browser Console & Terminal Console
# ==========================================
@app.get("/console-log")
def log_console_message():
    # Prints to terminal/server console
    print(">>> [TERMINAL LOG]: Hello World from FastAPI Backend Console!")
    # Returns payload for browser console visualization
    return {"log": "Hello World"}

# ==========================================
# 4.d & 4.e. CRUD Operations with MySQL Driver
# ==========================================

# CREATE - Add User
@app.post("/users")
def create_user(user: User):
    try:
        conn = database.get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (user.name, user.email))
        conn.commit()
        user_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return {"id": user_id, "name": user.name, "email": user.email, "status": "User created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# READ - Get All Users
@app.get("/users")
def get_all_users():
    try:
        conn = database.get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        records = cursor.fetchall()
        cursor.close()
        conn.close()
        return {"users": records}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# UPDATE - Update User Email
@app.put("/users/{user_id}")
def update_user(user_id: int, user: User):
    try:
        conn = database.get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE users SET name=%s, email=%s WHERE id=%s", (user.name, user.email, user_id))
        conn.commit()
        cursor.close()
        conn.close()
        return {"status": f"User ID {user_id} updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# DELETE - Remove User
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    try:
        conn = database.get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM users WHERE id=%s", (user_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return {"status": f"User ID {user_id} deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
