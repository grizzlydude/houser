-- create table
CREATE TABLE houser (
	id SERIAL PRIMARY KEY,
  property_name VARCHAR(100),
  the_address VARCHAR(200),
  city VARCHAR(200),
  the_state VARCHAR(200),
  zip INTEGER
)

-- dummy data
INSERT INTO houser (property_name, the_address, city, the_state, zip)
VALUES ('red', 'f;alkdjfai', 'Anchorage', 'AK', 9932938);
