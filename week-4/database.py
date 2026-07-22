import mysql.connector

def get_db_connection():
    # Database connection parameters (Adjust username/password as per your local MySQL workbench)
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="your_mysql_password",
        database="fsd_lab_db"
    )
    return connection

# Initialize Database and User Table if not exists
def init_db():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="your_mysql_password"
        )
        cursor = conn.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS fsd_lab_db")
        cursor.execute("USE fsd_lab_db")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL
            )
        """)
        conn.commit()
        cursor.close()
        conn.close()
        print("MySQL Database & Table Initialized Successfully!")
    except Exception as e:
        print(f"Error connecting to MySQL Database: {e}")
