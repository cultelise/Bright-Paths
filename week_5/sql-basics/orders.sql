CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  person_id VARCHAR(30),
  product_name VARCHAR(30),
  product_price FLOAT,
  quantity INT
);

INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES  ('Elise', 'Hot Wings', 9.99, 2),
        ('Elise', 'Vanilla Shake', 4.99, 1),
        ('Elise', 'French Fries', 4.99, 1),
        ('Draven', 'Dog Biscuit', 2.99, 2),
        ('Homer', 'Beer', 3.99, 10);

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price * quantity) FROM orders;

SELECT SUM(product_price * quantity) 
FROM orders
WHERE person_id = 'Elise';