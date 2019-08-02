INSERT INTO houser (property_name, the_address, city, the_state, zip)
VALUES ($1, $2, $3, $4, $5);

SELECT * FROM houser;