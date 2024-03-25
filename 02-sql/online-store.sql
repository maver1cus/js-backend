CREATE DATABASE OnlineStore;

CREATE TABLE Customers (
	customer_id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	email VARCHAR(100),
	phone_number VARCHAR(15)
);

CREATE TABLE Products (
	product_id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	price DECIMAL(10, 2),
	description TEXT
);

CREATE TABLE Orders (
	order_id SERIAL PRIMARY KEY,
	customer_id INT,
	order_date DATE,
	total_amount DECIMAL(10, 2),
	FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderDetails (
	order_id INT,
	product_id INT,
	quantity INT,
	PRIMARY KEY (order_id, product_id),
	FOREIGN KEY (order_id) REFERENCES Orders(order_id),
	FOREIGN KEY (product_id) REFERENCES Products(product_id)
);