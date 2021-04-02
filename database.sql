CREATE DATABASE apextools;

CREATE TABLE order(
    order_id SERIAL PRIMARY KEY, 
    description VARCHAR(255),
    status VARCHAR(50),
    store_id INT,
    customer_id INT,
    quote_date DATE, 
);