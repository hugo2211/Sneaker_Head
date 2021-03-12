DROP DATABASE IF EXISTS sneaker_head;
Create Database sneaker_head;

use sneaker_head;

create table webusers (
web_id int auto_increment,
username varchar(30),
userpws varchar(255),
primary key (web_id),
UNIQUE KEY unique_username (username)
);