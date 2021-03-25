CREATE DEFINER=`root`@`localhost` PROCEDURE `add_image`(
q_url varchar(255))
BEGIN
INSERT INTO shoeimage (shoe_id, url)
VALUES ((select last_insert_id()) , q_url);
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `add_shoe`(
p_brand_name VARCHAR(35),
p_shoe_model varchar(45),
p_color varchar(255),
p_year INT,
p_status_name VARCHAR(25),
p_web_id INT,
p_url varchar(255),
p_price DECIMAL(5,2),
p_shoe_condition VARCHAR(35),
P_description VARCHAR(255))
BEGIN
IF p_price = "" then set p_price = NULL; END IF;
INSERT INTO myshoes (brand_name, shoe_model, color, year, status_name, postdte, web_id, price, shoe_condition, description)
VALUES (p_brand_name, p_shoe_model, p_color, p_year, p_status_name, NOW(), p_web_id, p_price, p_shoe_condition, p_description);
CALL add_image(p_url);
END


CREATE DEFINER=`root`@`localhost` PROCEDURE `feed_shoes`(
p_web_id INT
)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description
FROM myshoes a 
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.web_id <> p_web_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END


CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoes`()
BEGIN
SELECT * FROM myshoes;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoe`(
p_shoe_id INT)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description
FROM myshoes a 
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.shoe_id = p_shoe_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END


CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoe`(
p_shoe_id INT)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description
FROM myshoes a 
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.shoe_id = p_shoe_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END