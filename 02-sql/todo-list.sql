CREATE DATABASE TodoList;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
	task_id SERIAL PRIMARY KEY,
	task_name VARCHAR(100) NOT NULL,
	description TEXT,
	due_date DATE,
	user_id INT,
	is_completed BOOLEAN DEFAULT false,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE categories (
	category_id SERIAL PRIMARY KEY,
	category_name VARCHAR(50) NOT NULL
);

CREATE TABLE task_categories (
	task_id INT,
	category_id INT,
	PRIMARY KEY (task_id, category_id),
	FOREIGN KEY (task_id) REFERENCES tasks(task_id),
	FOREIGN KEY (category_id) REFERENCES categories(category_id)
);