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

CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_shoe`(
p_shoe_id int
)
BEGIN
	DELETE FROM myshoes WHERE shoe_id = p_shoe_id;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `feed_shoes`(
p_web_id INT
)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description, a.size, (select count(shoe_id) from shoelikes d where d.shoe_id = a.shoe_id ) as likes, 
(SELECT COUNT(shoe_comment) FROM shoecomments e where e.shoe_id = a.shoe_id) AS comments
FROM myshoes a 
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.web_id <> p_web_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_user_shoes`(
p_web_id INT)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description, a.size, (select count(shoe_id) from shoelikes d where d.shoe_id = a.shoe_id ) as likes,
(SELECT COUNT(shoe_comment) FROM shoecomments e where e.shoe_id = a.shoe_id) AS comments
FROM myshoes a
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.web_id = p_web_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_myshoes`(
p_shoe_id INT,
p_brand_name varchar(35),
p_shoe_model varchar(45),
p_color varchar(255),
p_year INT,
p_status_name VARCHAR(25),
p_price decimal(5,2),
p_shoe_condition varchar(35),
p_size varchar(5),
p_description varchar(255)
)
BEGIN
UPDATE myshoes
SET brand_name = p_brand_name,
shoe_model = p_shoe_model,
color = p_color,
year = p_year,
status_name  = p_status_name,
price = p_price,
shoe_condition = p_shoe_condition,
description = p_description,
size = p_size
WHERE shoe_id = p_shoe_id;
END

                      
CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoes`()
BEGIN
SELECT * FROM myshoes;
END

                      
CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoe`(
p_shoe_id INT)
BEGIN
SELECT a.shoe_id, c.username, brand_name, shoe_model, color, year, 
status_name, postdte, a.web_id, url as image_url, price, shoe_condition, description, a.size, (select count(shoe_id) from shoelikes d where d.shoe_id = a.shoe_id ) as likes
FROM myshoes a 
JOIN shoeimage b on a.shoe_id
JOIN webusers c on a.web_id
where a.shoe_id = p_shoe_id AND a.shoe_id = b.shoe_id and c.web_id = a.web_id;
END

                      
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_comments`(
p_shoe_id INT,
p_web_id INT,
p_shoe_comment varchar(255)
)
BEGIN
INSERT INTO shoecomments (shoe_id, web_id, username, shoe_comment, comment_date)
VALUES (p_shoe_id, p_web_id, (select username from webusers where web_id = p_web_id), p_shoe_comment, CURRENT_TIMESTAMP());
END

                                      
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_like`(
p_web_id int,
p_shoe_id int
)
BEGIN
INSERT INTO shoelikes (web_id, shoe_id) VALUES (p_web_id, p_shoe_id);
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_like`(
p_web_id int,
p_shoe_id int
)
BEGIN
DELETE FROM shoelikes WHERE web_id = p_web_id AND shoe_id = p_shoe_id;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_user_shoe_like`(
p_web_id int,
p_shoe_id int
)
BEGIN
SELECT * FROM shoelikes WHERE shoe_id = p_shoe_id AND web_id = p_web_id;
END
 
                      
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_shoe`(
p_shoe_id int
)
BEGIN
DELETE FROM myshoes WHERE shoe_id = p_shoe_id;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `pull_shoe_comments`(
p_shoe_id int
)
BEGIN
SELECT shoe_comment, username, comment_date  
FROM shoecomments 
WHERE shoe_id = p_shoe_id
ORDER BY comment_date DESC;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `search_shoes`(
p_web_id INT,
p_search varchar(255)
)
BEGIN
SELECT * FROM myshoes
WHERE brand_name LIKE CONCAT('%', p_search, '%')
OR
shoe_model LIKE CONCAT('%', p_search, '%')
or color LIKE CONCAT('%', p_search, '%')
or year LIKE concat('%', p_search, '%')
or status_name LIKE CONCAT('%', p_search,'%')
and web_id <> p_web_id;
END
