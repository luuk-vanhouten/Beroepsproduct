const createQueries = {
  customer: `CREATE TABLE IF NOT EXISTS customer (
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
    )`,

  order: `CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER NOT NULL,
        order_date DATE NOT NULL,
        order_total DECIMAL(10,2) NOT NULL,

        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    )`,

  order_item: `CREATE TABLE IF NOT EXISTS order_item (
        order_item_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,

        FOREIGN KEY (order_id) REFERENCES orders(order_id),
        FOREIGN KEY (product_id) REFERENCES product(product_id)
    )`,

  category: `CREATE TABLE IF NOT EXISTS category (
        category_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        category_name VARCHAR(255) NOT NULL
    )`,

  product: `CREATE TABLE IF NOT EXISTS product (
        product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        category_id INTEGER NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        product_description VARCHAR(255) NOT NULL,
        product_price DECIMAL(10,2) NOT NULL,
        product_image VARCHAR(255) NOT NULL,

        FOREIGN KEY (category_id) REFERENCES category(category_id)
    )`,
};

const insertQueries = {
  customer:
    "INSERT INTO customer (first_name, last_name, email, phone_number, address, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
  order:
    "INSERT INTO orders (customer_id, order_date, order_total) VALUES (?, ?, ?)",
  order_item:
    "INSERT INTO order_item (order_id, product_id, quantity) VALUES (?, ?, ?)",
  category: "INSERT INTO category (category_name) VALUES (?)",
  product:
    "INSERT INTO product (category_id, product_name, product_description, product_price) VALUES (?, ?, ?, ?)",
};

const selectQueries = {
  customer: "SELECT * FROM customer",
  order: "SELECT * FROM orders",
  order_item: "SELECT * FROM order_item",
  category: "SELECT * FROM category",
  procudt: "SELECT * FROM product",
};

const updateQueries = {
  customer:
    "UPDATE customer SET first_name = ?, last_name = ?, email = ?, phone_number = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ? WHERE customer_id = ?",
  order:
    "UPDATE orders SET customer_id = ?, order_date = ?, order_total = ? WHERE order_id = ?",
  order_item:
    "UPDATE order_item SET order_id = ?, product_id = ?, quantity = ? WHERE order_item_id = ?",
  category: "UPDATE category SET category_name = ? WHERE category_id = ?",
  product:
    "UPDATE product SET category_id = ?, product_name = ?, product_description = ?, product_price = ? WHERE product_id = ?",
};

const deleteQueries = {
  customer: "DELETE FROM customer WHERE customer_id = ?",
  order: "DELETE FROM orders WHERE order_id = ?",
  order_item: "DELETE FROM order_item WHERE order_item_id = ?",
  category: "DELETE FROM category WHERE category_id = ?",
  product: "DELETE FROM product WHERE product_id = ?",
};

const exports = {
  createQueries,
  insertQueries,
  selectQueries,
  updateQueries,
  deleteQueries,
};

export default exports;
