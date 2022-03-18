/*create a new user*/
CREATE USER ecommerceapp WITH PASSWORD 'ecommerceapp' CREATEDB;

/*create a new database*/
CREATE DATABASE ecommerceapp WITH OWNER = ecommerceapp;