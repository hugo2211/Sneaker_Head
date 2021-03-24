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
p_url varchar(255))
BEGIN
INSERT INTO myshoes (brand_name, shoe_model, color, year, status_name, postdte, web_id)
VALUES (p_brand_name, p_shoe_model, p_color, p_year, p_status_name, NOW(), p_web_id);

CALL add_image(p_url);
END