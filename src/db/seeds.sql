-- create table
CREATE TABLE houser (
	id SERIAL PRIMARY KEY,
  property_name VARCHAR(100),
  address VARCHAR(200),
  city VARCHAR(200),
  state VARCHAR(200),
  zip INTEGER
)
