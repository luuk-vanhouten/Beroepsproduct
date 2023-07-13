const insertQueries = {
  customer: "INSERT INTO customer VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
  order: "INSERT INTO orders VALUES (?, ?, ?)",
  order_product: "INSERT INTO order_product VALUES (?, ?, ?)",
  category: "INSERT INTO category VALUES (?, ?)",
  product: "INSERT INTO product VALUES (?, ?, ?, ?, ?, ?)",
};

const selectQueries = {
  customer: "SELECT * FROM customer",
  order: "SELECT * FROM orders",
  order_product: "SELECT * FROM order_product",
  category: "SELECT * FROM category",
  procudt: "SELECT * FROM product",
};

const updateQueries = {
  customer:
    "UPDATE customer SET first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ? WHERE customer_id = ?",
  order:
    "UPDATE orders SET customer_id = ?, order_date = ?, order_total = ? WHERE order_id = ?",
  order_prodcut:
    "UPDATE order_product SET order_id = ?, product_id = ?, quantity = ? WHERE order_product_id = ?",
  category: "UPDATE category SET category_name = ? WHERE category_id = ?",
  product:
    "UPDATE product SET category_id = ?, name = ?, description = ?, price = ?, image = ? WHERE product_id = ?",
};

const deleteQueries = {
  customer: "DELETE FROM customer WHERE customer_id = ?",
  order: "DELETE FROM orders WHERE order_id = ?",
  order_product: "DELETE FROM order_product WHERE order_product_id = ?",
  category: "DELETE FROM category WHERE category_id = ?",
  product: "DELETE FROM product WHERE product_id = ?",
};

const exports = {
  insertQueries,
  selectQueries,
  updateQueries,
  deleteQueries,
};

