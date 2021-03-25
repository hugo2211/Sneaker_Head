DROP DATABASE IF EXISTS sneaker_head;
CREATE DATABASE sneaker_head;
USE sneaker_head;

create table webusers (
web_id INT AUTO_INCREMENT,
username VARCHAR(30) NOT NULL,
userpws VARCHAR(255) NOT NULL,
email VARCHAR(45) NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(45) NOT NULL,
PRIMARY KEY (web_id),
UNIQUE KEY unique_username (username)
);

CREATE TABLE myshoes (
shoe_id INT AUTO_INCREMENT,
brand_name VARCHAR(35) NOT NULL,
shoe_model varchar(45) NOT NULL,
color varchar(255) NOT NULL,
year INT NOT NULL,
status_name VARCHAR(25) NOT NULL,
postdte TIMESTAMP NOT NULL,
web_id INT NOT NULL,
shoe_likes INT DEFAULT 0 ,
price DECIMAL(5,2),
shoe_condition VARCHAR(35),
description VARCHAR(255),
PRIMARY KEY (shoe_id),
FOREIGN KEY (web_id) REFERENCES webusers (web_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1000;

create table shoeimage (
id INT AUTO_INCREMENT,
shoe_id INT NOT NULL,
url VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (shoe_id) REFERENCES myshoes (shoe_id) ON DELETE CASCADE
);
