CREATE DATABASE LettDB;

CREATE TABLE USER(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE ARTICLES(
    article_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    unit VARCHAR(255) NOT NULL,
    stock VARCHAR(255) NOT NULL,
    descr VARCHAR(255),
    user_id INT,
);

ALTER TABLE ARTICLES
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES user(user_id);


CREATE TABLE CATEGORY(
    sku SERIAL PRIMARY KEY,
    cat_name VARCHAR(255) NOT NULL
);

ALTER TABLE ARTICLES
ADD COLUMN category_sku INT;

ALTER TABLE ARTICLES
ADD CONSTRAINT fk_category
FOREIGN KEY (category_sku)
REFERENCES category(sku);

CREATE TABLE GST_SLAB(
    gstin SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    rate DECIMAL(5, 2) NOT NULL
);

ALTER TABLE articles
ADD COLUMN gst_slab_gstin INT;

ALTER TABLE articles
ADD CONSTRAINT fk_gst_slab
FOREIGN KEY (gst_slab_gstin)
REFERENCES gst_slab(gstin);

CREATE VIEW user_view AS
SELECT user_id, name, email
FROM user;

CREATE VIEW articles_view AS
SELECT article_id, title, price, unit, stock, descr, category_sku, 
FROM articles;

CREATE VIEW gst_view AS
SELECT gstin, amount, rate
FROM gst_slab;

SELECT u.user_id, u.name, u.email, a.article_id, a.title, 
a.price, a.unit, a.stock, a.descr, g.gstin, g.amount, g.rate
FROM user u
JOIN articles a ON u.user_id = a.user_id
JOIN gst_slab g ON a.gst_slab_gstin = g.gstin;

-- Trigger to update the stock of an article after an invoice is inserted
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

-- Trigger to update the total amount of an invoice after an article is inserted
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
AFTER INSERT ON articles
FOR EACH ROW
EXECUTE FUNCTION update_total_amount();

-- Trigger to update the total amount of an invoice after an article is updated
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

-- Trigger to update the stock of an article after an invoice is deleted
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

CREATE TABLE tnc(tid SERIAL PRIMARY KEY, content TEXT);

INSERT INTO tnc (content) VALUES ('By clicking on Invoicing Now, you choose to download according to the information you have entered and the text on the download page and the terms here, and at the same time accept the terms here.');

INSERT INTO tnc(content) VALUES('You can use the program FREE for 14 days.');

INSERT INTO tnc(content) VALUES('LettFaktura is so easy and self-explanatory that the chance that you will end up needing support is minimal, but if you should need support, we are here for you, with our office staffed most of the day. After the trial period, the subscription continues and costs NOK 99, for example. VAT per month, which is invoiced annually. If you do not wish to keep the program, simply cancel the trial period by notifying us within 14 days of downloading.');

INSERT INTO tnc(content) VALUES('You of course have the right to end the use of the program free of charge, by notifying us by email within 14 days of download, that you do not wish to continue with the program, and of course not paying anything either.');

INSERT INTO tnc(content) VALUES('If we do not receive such a message from you within 14 days of downloading, then the order cannot be changed for natural reasons. By download is meant the date and time when you have chosen to press the Invoicing Now button.');

INSERT INTO tnc(content) VALUES('Invoicing is done for one year at a time.');

INSERT INTO tnc(content) VALUES('The price for LettFaktura (offer price NOK 99 per month / word price NOK 129 per month) is for the annual fee Start for one year of use of the program.');

INSERT INTO tnc(content) VALUES('(When using the offer price of NOK 99, the one-year period is calculated from download.)');

INSERT INTO tnc(content) VALUES('All prices are ex. VAT.');

INSERT INTO tnc(content) VALUES('Time registration. Calculation, Member invoicing, Offers, Customer follow-up, Inventory count, Inventory management and English invoice text are additional modules that can be ordered after installation of the program.');

INSERT INTO tnc(content) VALUES('The annual fee is ongoing, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.');

INSERT INTO tnc(content) VALUES('The introductory offer (NOK 99 per month) is for the annual fee Start for the first year. After the first year, words are billed. price which is currently, for annual fee Start, one hundred and twenty-nine kroner per month, for annual fee Remote control, two hundred and sixty-five kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.');

INSERT INTO tnc(content) VALUES('If you choose to keep the program by not notifying us by email within 14 days of download that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Code for the program will be sent automatically after the invoice has been paid. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help fix the logo for you at cost price.');

INSERT INTO tnc(content) VALUES('Licenses for the use of LettFaktura are of course sold in accordance with the applicable laws.');

INSERT INTO tnc(content) VALUES('In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we naturally have to store your information.');

INSERT INTO tnc(content) VALUES('In connection with the storage of information, the law requires that we provide you with the following information:');

INSERT INTO tnc(content) VALUES('If you order as a private person, you have the right to cancel as required by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and phone. If you do not want to be contacted, just send us an email about it.');

INSERT INTO tnc(content) VALUES('You can at any time ask not to be sent information about upgrades by email, fax, letter or the like, and we will of course not do that. You send such a request to us by email, fax, letter or similar.');

INSERT INTO tnc(content) VALUES('For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, fax, letter and the like. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, which we can use to send/sell products, upgrades and the like, either by sub-licensing or otherwise.');

INSERT INTO tnc(content) VALUES('You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.');

INSERT INTO tnc(content) VALUES('If you wish to contact us, please use the information on this or any of our other websites.');

INSERT INTO tnc(content) VALUES('Click on Invoicing Now to download according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)');

INSERT INTO tnc(content) VALUES('Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be their experience.');

INSERT INTO tnc(content) VALUES('Have a great day!');


query("INSERT INTO articles (title,price,unit,stock,descr) VALUES($1,$2,$3,$4,$5) RETURNING *", [title,price,unit,stock,descr]);

query("SELECT * FROM tnc ORDER BY tid");

query("SELECT * FROM articles ORDER BY article_id ASC");

query("SELECT * FROM articles WHERE article_id = $1",[id]);

query("UPDATE articles SET title = $2,price = $3,unit = $4,stock = $5,descr = $6  WHERE article_id = $1",[id,title,price,unit,stock,descr]);

query("DELETE FROM articles WHERE article_id = $1",[id]);