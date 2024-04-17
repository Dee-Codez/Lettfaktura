CREATE DATABASE LettDB;

-- Query 1: Create the USER table
CREATE TABLE USER(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Query 2: Create the ARTICLES table
CREATE TABLE ARTICLES(
    article_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    unit VARCHAR(255) NOT NULL,
    stock VARCHAR(255) NOT NULL,
    descr VARCHAR(255),
    user_id INT
);

-- Query 3: Add foreign key constraint to ARTICLES table
ALTER TABLE ARTICLES
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES user(user_id);

-- Query 4: Create the CATEGORY table
CREATE TABLE CATEGORY(
    sku SERIAL PRIMARY KEY,
    cat_name VARCHAR(255) NOT NULL
);

-- Query 5: Add column and foreign key constraint to ARTICLES table
ALTER TABLE ARTICLES
ADD COLUMN category_sku INT;

ALTER TABLE ARTICLES
ADD CONSTRAINT fk_category
FOREIGN KEY (category_sku)
REFERENCES category(sku);

-- Query 6: Create the GST_SLAB table
CREATE TABLE GST_SLAB(
    gstin SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    rate DECIMAL(5, 2) NOT NULL
);

-- Query 7: Add column and foreign key constraint to ARTICLES table
ALTER TABLE articles
ADD COLUMN gst_slab_gstin INT;

ALTER TABLE articles
ADD CONSTRAINT fk_gst_slab
FOREIGN KEY (gst_slab_gstin)
REFERENCES gst_slab(gstin);

-- Query 8: Create the user_view view
CREATE VIEW user_view AS
SELECT user_id, name, email
FROM user;

-- Query 9: Create the articles_view view
CREATE VIEW articles_view AS
SELECT article_id, title, price, unit, stock, descr, category_sku
FROM articles;

-- Query 10: Create the gst_view view
CREATE VIEW gst_view AS
SELECT gstin, amount, rate
FROM gst_slab;

-- Query 11: Select data from multiple tables
SELECT u.user_id, u.name, u.email, a.article_id, a.title, 
a.price, a.unit, a.stock, a.descr, g.gstin, g.amount, g.rate
FROM user u
JOIN articles a ON u.user_id = a.user_id
JOIN gst_slab g ON a.gst_slab_gstin = g.gstin;


-- Query 12: Display data from the user_view view
SELECT * FROM user_view;

-- Query 13: Display data from the articles_view view
SELECT * FROM articles_view;

-- Query 14: Display data from the gst_view view
SELECT * FROM gst_view;

-- Query 15: Display data from multiple tables
SELECT u.user_id, u.name, u.email, a.article_id, a.title, 
a.price, a.unit, a.stock, a.descr, g.gstin, g.amount, g.rate
FROM user u
JOIN articles a ON u.user_id = a.user_id
JOIN gst_slab g ON a.gst_slab_gstin = g.gstin;

-- Query 16: Select articles with low stock
SELECT *
FROM articles
WHERE stock < 10;

-- Query 17: Select articles with a specific category
SELECT *
FROM articles
WHERE category_sku = 1;

-- Query 18: Select articles with a specific GST slab rate
SELECT *
FROM articles
WHERE gst_slab_gstin IN (
    SELECT gstin
    FROM gst_slab
    WHERE rate = 18.0
);

-- Query 19: Update the price of an article
UPDATE articles
SET price = 9.99
WHERE article_id = 1;

-- Query 20: Delete an article
DELETE FROM articles
WHERE article_id = 1;

-- Query 21: Select articles with a specific unit
SELECT *
FROM articles
WHERE unit = 'kg';

-- Query 22: Select articles with a specific title
SELECT *
FROM articles
WHERE title LIKE '%apple%';

-- Query 23: Select articles with a specific price range
SELECT *
FROM articles
WHERE price BETWEEN 10.00 AND 20.00;

-- Query 24: Select articles with a specific category and stock greater than 0
SELECT *
FROM articles
WHERE category_sku = 2
AND stock > 0;

-- Query 25: Update the stock of an article
UPDATE articles
SET stock = stock + 10
WHERE article_id = 2;

-- Query 26: Delete all articles with zero stock
DELETE FROM articles
WHERE stock = 0;

-- Query 27: Select articles ordered by price in descending order
SELECT *
FROM articles
ORDER BY price DESC;

-- Query 28: Select the total stock of all articles
SELECT SUM(stock) AS total_stock
FROM articles;

-- Query 29: Select the average price of articles in a specific category
SELECT AVG(price) AS average_price
FROM articles
WHERE category_sku = 3;

-- Query 30: Select the maximum price of articles
SELECT MAX(price) AS max_price
FROM articles;

-- Query 31: Select articles with a specific supplier
SELECT *
FROM articles
WHERE supplier_id = 1;

-- Query 32: Select articles with a specific color
SELECT *
FROM articles
WHERE color = 'red';

-- Query 33: Update the category of an article
UPDATE articles
SET category_sku = 4
WHERE article_id = 3;

-- Query 34: Delete all articles with a specific supplier
DELETE FROM articles
WHERE supplier_id = 2;

-- Query 35: Select articles with a specific size
SELECT *
FROM articles
WHERE size = 'XL';

-- Query 36: Select articles with a specific brand
SELECT *
FROM articles
WHERE brand = 'Nike';

-- Query 37: Select articles with a specific weight range
SELECT *
FROM articles
WHERE weight BETWEEN 0.5 AND 1.0;

-- Query 38: Select articles with a specific category and price less than 50.00
SELECT *
FROM articles
WHERE category_sku = 5
AND price < 50.00;

-- Query 39: Update the quantity of an article
UPDATE articles
SET quantity = 5
WHERE article_id = 4;

-- Query 40: Delete all articles with a specific color
DELETE FROM articles
WHERE color = 'blue';

-- Query 41: Select articles with a specific category and stock greater than 10
SELECT *
FROM articles
WHERE category_sku = 6
AND stock > 10;

-- Query 42: Update the price of an article
UPDATE articles
SET price = 25.99
WHERE article_id = 5;

-- Query 43: Delete all articles with a specific size
DELETE FROM articles
WHERE size = 'M';

-- Query 44: Select articles with a specific brand and color
SELECT *
FROM articles
WHERE brand = 'Adidas'
AND color = 'black';

-- Query 45: Select articles with a specific weight less than 0.5
SELECT *
FROM articles
WHERE weight < 0.5;

-- Query 46: Select articles with a specific category and price between 50.00 and 100.00
SELECT *
FROM articles
WHERE category_sku = 7
AND price BETWEEN 50.00 AND 100.00;

-- Query 47: Update the stock of an article
UPDATE articles
SET stock = 20
WHERE article_id = 6;

-- Query 48: Delete all articles with a specific brand
DELETE FROM articles
WHERE brand = 'Puma';

-- Query 49: Select articles with a specific color and size
SELECT *
FROM articles
WHERE color = 'green'
AND size = 'S';

-- Query 50: Select articles with a specific category and weight greater than 1.0
SELECT *
FROM articles
WHERE category_sku = 8
AND weight > 1.0;

-- Query 51: Select articles with a specific brand and price less than 30.00
SELECT *
FROM articles
WHERE brand = 'Nike'
AND price < 30.00;

-- Query 52: Update the quantity and price of an article
UPDATE articles
SET quantity = 10, price = 19.99
WHERE article_id = 7;

-- Query 53: Delete all articles with a specific category
DELETE FROM articles
WHERE category_sku = 9;

-- Query 54: Select articles with a specific color and weight between 0.5 and 1.0
SELECT *
FROM articles
WHERE color = 'red'
AND weight BETWEEN 0.5 AND 1.0;

-- Query 55: Select articles with a specific brand and stock greater than 5
SELECT *
FROM articles
WHERE brand = 'Reebok'
AND stock > 5;

-- Query 56: Update the total amount of an article
UPDATE articles
SET total_amount = price * quantity
WHERE article_id = 8;

-- Query 57: Delete all articles with a specific size and color
DELETE FROM articles
WHERE size = 'L'
AND color = 'yellow';

-- Query 58: Select articles with a specific category and weight less than 0.5
SELECT *
FROM articles
WHERE category_sku = 10
AND weight < 0.5;

-- Query 59: Select articles with a specific brand and price between 30.00 and 50.00
SELECT *
FROM articles
WHERE brand = 'Adidas'
AND price BETWEEN 30.00 AND 50.00;

-- Query 60: Update the stock and price of an article
UPDATE articles
SET stock = 15, price = 39.99
WHERE article_id = 9;

-- Query 61: Select articles with a specific category and stock greater than 10
SELECT *
FROM articles
WHERE category_sku = 11
AND stock > 10;

-- Query 62: Update the quantity and price of an article
UPDATE articles
SET quantity = 5, price = 9.99
WHERE article_id = 10;

-- Query 63: Delete all articles with a specific brand and color
DELETE FROM articles
WHERE brand = 'New Balance'
AND color = 'blue';

-- Query 64: Select articles with a specific size and weight less than 0.3
SELECT *
FROM articles
WHERE size = 'M'
AND weight < 0.3;

-- Query 65: Select articles with a specific category and price between 50.00 and 100.00
SELECT *
FROM articles
WHERE category_sku = 12
AND price BETWEEN 50.00 AND 100.00;

-- Query 66: Update the stock and price of an article
UPDATE articles
SET stock = 8, price = 79.99
WHERE article_id = 11;

-- Query 67: Select articles with a specific brand and stock less than 3
SELECT *
FROM articles
WHERE brand = 'Under Armour'
AND stock < 3;

-- Query 68: Delete all articles with a specific size and weight
DELETE FROM articles
WHERE size = 'XL'
AND weight = 0.4;

-- Query 69: Select articles with a specific category and price greater than 100.00
SELECT *
FROM articles
WHERE category_sku = 13
AND price > 100.00;

-- Query 70: Select articles with a specific brand and color
SELECT *
FROM articles
WHERE brand = 'ASICS'
AND color = 'black';

-- Query 71: Create the update_stock function and trigger
CREATE OR REPLACE FUNCTION update_stock()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET stock = stock - NEW.quantity
    WHERE article_id = NEW.article_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stock_trigger
AFTER INSERT ON ARTICLES
FOR EACH ROW
EXECUTE FUNCTION update_stock();

-- Query 72: Create the update_total_amount function and trigger
CREATE OR REPLACE FUNCTION update_total_amount()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET total_amount = total_amount + (NEW.price * NEW.quantity)
    WHERE article_id = NEW.article_id;
    RETURN NEW;

-- Query 73: Create the update_stock function and trigger
CREATE OR REPLACE FUNCTION update_stock()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET stock = stock - NEW.quantity
    WHERE article_id = NEW.article_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stock_trigger
AFTER INSERT ON ARTICLES
FOR EACH ROW
EXECUTE FUNCTION update_stock();

-- Query 74: Create the update_total_amount function and trigger
CREATE OR REPLACE FUNCTION update_total_amount()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET total_amount = total_amount + (NEW.price * NEW.quantity)
    WHERE article_id = NEW.article_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_total_amount_trigger
AFTER INSERT ON articles;


-- Query 75: Create the update_total_amount_on_update function and trigger
CREATE OR REPLACE FUNCTION update_total_amount_on_update()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET total_amount = total_amount - (OLD.price * OLD.quantity) + (NEW.price * NEW.quantity)
    WHERE article_id = NEW.article_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_total_amount_on_update_trigger
AFTER UPDATE ON articles
FOR EACH ROW
EXECUTE FUNCTION update_total_amount_on_update();

-- Query 76: Create the update_stock_on_delete function and trigger
CREATE OR REPLACE FUNCTION update_stock_on_delete()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE articles
    SET stock = stock + OLD.quantity
    WHERE article_id = OLD.article_id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_stock_on_delete_trigger
AFTER DELETE ON articles
FOR EACH ROW
EXECUTE FUNCTION update_stock_on_delete();


-- Query 77: Create the update_total_amount_on_delete function and trigger
CREATE TABLE tnc(tid SERIAL PRIMARY KEY, content TEXT);

-- Query 78: Insert data into the tnc table
INSERT INTO tnc (content) VALUES ('By clicking on Invoicing Now, you choose to download according to the information you have entered and the text on the download page and the terms here, and at the same time accept the terms here.');

-- Query 79: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('You can use the program FREE for 14 days.');

-- Query 80: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('LettFaktura is so easy and self-explanatory that the chance that you will end up needing support is minimal, but if you should need support, we are here for you, with our office staffed most of the day. After the trial period, the subscription continues and costs NOK 99, for example. VAT per month, which is invoiced annually. If you do not wish to keep the program, simply cancel the trial period by notifying us within 14 days of downloading.');

-- Query 81: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('You of course have the right to end the use of the program free of charge, by notifying us by email within 14 days of download, that you do not wish to continue with the program, and of course not paying anything either.');

-- Query 82: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('If we do not receive such a message from you within 14 days of downloading, then the order cannot be changed for natural reasons. By download is meant the date and time when you have chosen to press the Invoicing Now button.');

-- Query 83: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Invoicing is done for one year at a time.');

-- Query 84: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('The price for LettFaktura (offer price NOK 99 per month / word price NOK 129 per month) is for the annual fee Start for one year of use of the program.');

-- Query 85: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('(When using the offer price of NOK 99, the one-year period is calculated from download.)');

-- Query 86: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('All prices are ex. VAT.');

-- Query 87: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Time registration. Calculation, Member invoicing, Offers, Customer follow-up, Inventory count, Inventory management and English invoice text are additional modules that can be ordered after installation of the program.');

-- Query 87: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('The annual fee is ongoing, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.');

-- Query 89: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('The introductory offer (NOK 99 per month) is for the annual fee Start for the first year. After the first year, words are billed. price which is currently, for annual fee Start, one hundred and twenty-nine kroner per month, for annual fee Remote control, two hundred and sixty-five kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.');

-- Query 90: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('If you choose to keep the program by not notifying us by email within 14 days of download that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Code for the program will be sent automatically after the invoice has been paid. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help fix the logo for you at cost price.');

-- Query 91: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Licenses for the use of LettFaktura are of course sold in accordance with the applicable laws.');

-- Query 92: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we naturally have to store your information.');

-- Query 93: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('In connection with the storage of information, the law requires that we provide you with the following information:');

-- Query 94: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('If you order as a private person, you have the right to cancel as required by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and phone. If you do not want to be contacted, just send us an email about it.');

-- Query 95: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('You can at any time ask not to be sent information about upgrades by email, fax, letter or the like, and we will of course not do that. You send such a request to us by email, fax, letter or similar.');

-- Query 96: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, fax, letter and the like. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, which we can use to send/sell products, upgrades and the like, either by sub-licensing or otherwise.');

-- Query 97: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.');

-- Query 98: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('If you wish to contact us, please use the information on this or any of our other websites.');

-- Query 99: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Click on Invoicing Now to download according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)');

-- Query 100: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be their experience.');

-- Query 101: Insert data into the tnc table
INSERT INTO tnc(content) VALUES('Have a great day!');

-- Query 102: Insert into articles table
query("INSERT INTO articles (title,price,unit,stock,descr) VALUES($1,$2,$3,$4,$5) RETURNING *", [title,price,unit,stock,descr]);

-- Query 103: Select from tnc table
query("SELECT * FROM tnc ORDER BY tid");

-- Query 104: Select from articles table
query("SELECT * FROM articles ORDER BY article_id ASC");

-- Query 105: Select from articles table with condition
query("SELECT * FROM articles WHERE article_id = $1",[id]);

-- Query 106: Update articles table
query("UPDATE articles SET title = $2,price = $3,unit = $4,stock = $5,descr = $6  WHERE article_id = $1",[id,title,price,unit,stock,descr]);

-- Query 107: Delete from articles table
query("DELETE FROM articles WHERE article_id = $1",[id]);

-- Query 108: INSERT into articles table while returning
query("INSERT INTO articles (title,price,unit,stock,descr) VALUES($1,$2,$3,$4,$5) RETURNING *", [title,price,unit,stock,descr]);

-- Query 109: SELECT from articles table with order
query("SELECT * FROM tnc ORDER BY tid");

-- Query 110: SELECT from articles table with order
query("SELECT * FROM articles ORDER BY article_id ASC");

-- Query 111: SELECT from articles table with specific article_id
query("SELECT * FROM articles WHERE article_id = $1",[id]);

-- Query 112: UPDATE articles table with custom input
query("UPDATE articles SET title = $2,price = $3,unit = $4,stock = $5,descr = $6  WHERE article_id = $1",[id,title,price,unit,stock,descr]);

-- Query 113: DELETE from articles table specific article_id
query("DELETE FROM articles WHERE article_id = $1",[id]);