// Hier staan de SQL statements die gebruikt zijn om de tabellen aan te maken.
// Deze staan hier alleen voor eigen gebruik, mocht er later iets mis gaan met de database.

CREATE TABLE IF NOT EXISTS customer (
        customer_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone_number VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip_code VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL
    );
    
CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER NOT NULL,
        order_date DATE NOT NULL,
        order_total DECIMAL(10,2) NOT NULL,

        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        );
        
CREATE TABLE IF NOT EXISTS order_product (
        order_product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,

        FOREIGN KEY (order_id) REFERENCES orders(order_id),
        FOREIGN KEY (product_id) REFERENCES product(product_id)
    );
    
CREATE TABLE IF NOT EXISTS category (
        category_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        category_name VARCHAR(255) NOT NULL
    );
    
CREATE TABLE IF NOT EXISTS product (
        product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        category_id INTEGER NOT NULL,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        image VARCHAR(255) NULL,

        FOREIGN KEY (category_id) REFERENCES category(category_id)
    );

        
