const table = `
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  password VARCHAR(30),
  img VARCHAR(50),
  aboutuser VARCHAR(300) 
);`