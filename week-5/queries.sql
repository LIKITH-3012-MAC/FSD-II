-- ==========================================
-- Unit 5: Introduction to MySQL
-- ==========================================

-- 5.a & 5.d: Create Database and Table
CREATE DATABASE IF NOT EXISTS fsd_week5_db;
USE fsd_week5_db;


CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    department VARCHAR(50),
    marks INT
);

-- 5.b: Insert Data and Update
INSERT INTO students (name, department, marks) VALUES 
('Likith Naidu', 'CSE-AI', 95),
('Kiran Kumar', 'CSE', 82),
('Rahul', 'ECE', 74);

UPDATE students SET marks = 90 WHERE name = 'Mahitha';

SELECT * FROM students;

-- 5.c: Subqueries Implementation
-- Query 1: Marks higher than average
SELECT name, department, marks 
FROM students 
WHERE marks > (SELECT AVG(marks) FROM students);

-- Query 2: Same department as Likith Naidu
SELECT name, department 
FROM students 
WHERE department = (SELECT department FROM students WHERE name = 'Likith Naidu');
