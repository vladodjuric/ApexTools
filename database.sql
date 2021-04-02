-- CREATE DATABASE apextools;

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY, 
    description VARCHAR(255),
    status VARCHAR(50),
    store_id INT,
    customer_id INT,
    employee_id INT,
    return_date DATE,
    quote_date DATE);