const selectQueries = {
  customer: "SELECT * FROM customer",
  order: "SELECT * FROM orders",
  order_item: "SELECT * FROM order_product",
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
  selectQueries,
  updateQueries,
  deleteQueries,
};

export default exports;
