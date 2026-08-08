import mysql.connector

def init_project_db():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Likith@2006" # Change password if set on your Mac
        )
        cursor = conn.cursor()
        
        # 5.e: Create database directory in project and initialize
        cursor.execute("CREATE DATABASE IF NOT EXISTS week5_project_db;")
        cursor.execute("USE week5_project_db;")
        
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS project_logs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                log_message VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)
        print("Successfully initialized project database directory!")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Database initialization error: {e}")

if __name__ == "__main__":
    init_project_db()
