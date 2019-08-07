INSERT INTO houser (property_name, the_address, city, the_state, zip, image, morgage, rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM houser;