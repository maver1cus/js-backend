CREATE DATABASE CoursePortal;

CREATE TABLE Courses (
	course_id SERIAL PRIMARY KEY,
	course_name VARCHAR(255) NOT NULL,
	instructor_id INT,
	start_date DATE,
	end_date DATE,
	description TEXT
);

CREATE TABLE teacher (
	teacher_id SERIAL PRIMARY KEY,
	teacher_name VARCHAR(255) NOT NULL,
	email VARCHAR(255)
);

CREATE TABLE Students (
	student_id SERIAL PRIMARY KEY,
	student_name VARCHAR(255) NOT NULL,
	email VARCHAR(255)
);

CREATE TABLE Enrollments (
	enrollment_id SERIAL PRIMARY KEY,
	student_id INT,
	course_id INT,
	enrollment_date DATE,
	FOREIGN KEY (student_id) REFERENCES Students(student_id),
	FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Lessons (
	lesson_id SERIAL PRIMARY KEY,
	course_id INT,
	lesson_title VARCHAR(255) NOT NULL,
	lesson_content TEXT,
	lesson_order INT,
	FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Exams (
	exam_id SERIAL PRIMARY KEY,
	course_id INT,
	exam_name VARCHAR(255) NOT NULL,
	exam_date DATE,
	FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Results (
	result_id SERIAL PRIMARY KEY,
	student_id INT,
	exam_id INT,
	score INT,
	FOREIGN KEY (student_id) REFERENCES Students(student_id),
	FOREIGN KEY (exam_id) REFERENCES Exams(exam_id)
);