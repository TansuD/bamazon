create database bamazon;
use bamazon;
create table products (
item_id integer(10) not null,
product_name varchar(100),
department_name varchar(100),
price decimal(50, 2),
stock_quantity integer (30),
primary key (item_id)
); 
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('1', 'volleyball', 'balls', '24.99', '30');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('2', 'tennis racket', 'tennis', '20.99', '12');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('3', 'socks', 'clothing', '7.99', '35');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('4', 'sunscreen', 'body products', '14.99', '27');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('5', 'running shoes', 'shoes', '39.99', '19');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('6', 'baseball hat', 'clothing', '9.99', '34');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('7', 'basketball', 'balls', '25.99', '4');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('8', 'basketball shorts', 'clothing', '19.99', '40');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('9', 'dumbells', 'weights', '22.99', '5');
insert into products (item_id, product_name, department_name, price, stock_quantity) values ('10', 'golf balls', 'balls', '2.99', '55');

select * from (products);