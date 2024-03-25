CREATE DATABASE SocialNetwork;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    city VARCHAR(50),
    registration_date DATE
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT,
    post_content TEXT,
    post_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_text TEXT,
    comment_date TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    post_id INT,
    user_id INT,
    like_date TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE friends (
    friendship_id SERIAL PRIMARY KEY,
    user1_id INT,
    user2_id INT,
    friendship_date TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(user_id),
    FOREIGN KEY (user2_id) REFERENCES users(user_id)
);