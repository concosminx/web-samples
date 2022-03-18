CREATE SCHEMA IF NOT EXISTS app AUTHORIZATION ecommerceapp;

/*product categories*/
CREATE TABLE IF NOT EXISTS app.product_category (
  id SERIAL NOT NULL ,
  category_name VARCHAR(255) NULL DEFAULT NULL,
  CONSTRAINT product_category_PK PRIMARY KEY (id));


/*products*/
CREATE TABLE IF NOT EXISTS app.product (
  id SERIAL NOT NULL,
  sku VARCHAR(255) DEFAULT NULL,
  name VARCHAR(255) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  unit_price NUMERIC(13,2) DEFAULT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  active BOOLEAN DEFAULT 1,
  units_in_stock INTEGER DEFAULT NULL,
  date_created timestamp without time zone DEFAULT NULL,
  last_updated timestamp without time zone DEFAULT NULL,
  category_id INTEGER NOT NULL,
  CONSTRAINT product_pk PRIMARY KEY (id),
  CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES product_category (id)
);


/*sample data*/
INSERT INTO app.PRODUCT_CATEGORY(CATEGORY_NAME) VALUES ('BOOKS');

INSERT INTO app.PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID,DATE_CREATED)
VALUES ('BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript',
'assets/images/products/placeholder.png'
,true,100,19.99,1, NOW());

INSERT INTO app.PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1001', 'Spring Framework Tutorial', 'Learn Spring',
'assets/images/products/placeholder.png'
,true,100,29.99,1, NOW());

INSERT INTO app.PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes',
'assets/images/products/placeholder.png'
,true,100,24.99,1, NOW());

INSERT INTO app.PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT',
'assets/images/products/placeholder.png'
,true,100,29.99,1, NOW());

INSERT INTO app.PRODUCT (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1004', 'The Go Programming Language: A to Z', 'Learn Go',
'assets/images/products/placeholder.png'
,true,100,24.99,1, NOW());
