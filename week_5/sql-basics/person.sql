CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  age INT,
  height FLOAT,
  city VARCHAR(30),
  favorite_color VARCHAR(30)
);

INSERT INTO person (name, age, height, city, favorite_color)
VALUES  ('Elise', 32, 182, 'Dallas', 'Black'),
        ('Draven', 10, 50, 'Dallas', 'Brown'),
        ('Angelica', 35, 150, 'Austin', 'Green'),
        ('Bob', 1, 30, 'Internet', 'White'),
        ('Homer', 45, 170, 'Springfield', 'Yellow');

SELECT * FROM person;

SELECT * FROM person
ORDER BY height DESC;

SELECT * FROM person
ORDER BY height ASC;

SELECT * FROM person
ORDER BY age DESC;

SELECT * FROM person
WHERE age > 20;

SELECT * FROM person
WHERE age = 18;

SELECT * FROM person
WHERE age NOT BETWEEN 20 AND 30;

SELECT * FROM person
WHERE age != 27;

SELECT * FROM person
WHERE favorite_color != 'Red';

SELECT * FROM person
WHERE favorite_color != 'Red' 
AND favorite_color != 'Blue';

SELECT * FROM person
WHERE favorite_color = 'Orange'
OR favorite_color = 'Green'

SELECT * FROM person
WHERE favorite_color 
IN('Orange', 'Green', 'Blue')


SELECT * FROM person
WHERE favorite_color
IN('Purple', 'Yellow')
