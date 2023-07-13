import Database from "better-sqlite3";

function Query(query) {
  return dataAccess.db.prepare(query);
}

function initializeDatabase() {
  dataAccess.db = new Database("./db/database.sqlite");
}

function registerNewCustomer(first_name, last_name, email, password, phone_number, address, city, state, zip_code, country) {
  try {
    const query = Query(
      "INSERT INTO customer (first_name, last_name, email, password, phone_number, address, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    query.run(first_name, last_name, email, password, phone_number, address, city, state, zip_code, country);
  } catch (error) {
    console.error("An error occurred while executing the insert query:", error);
  }
}

function deleteCustomer(customer_id) {
  try {
    const query = Query("DELETE FROM customer WHERE customer_id = ?");
    query.run(customer_id);
  } catch (error) {
    console.error("An error occurred while executing the delete query:", error);
  }
}

function getAllProducts() {
  try {
    const query = Query("SELECT * FROM product");
    const result = query.all();
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsByName(name) {
  try {
    const query = Query("SELECT * FROM product WHERE name LIKE %?%");
    const result = query.get(name);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsById(product_id) { 
  try {
    const query = Query("SELECT * FROM product WHERE product_id = ?");
    const result = query.get(product_id);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsByCategory(category_name) {
  try {
    const query = Query("SELECT * FROM product AS p INNER JOIN category AS c ON c.category_id = p.category_id WHERE c.category_name LIKE %?%");
    const result = query.get(category_name);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}


const dataAccess = {
  initializeDatabase: initializeDatabase,
  db: null,
  registerNewCustomer: registerNewCustomer,
  deleteCustomer: deleteCustomer,
  getAllProducts: getAllProducts,
  getProductsByName: getProductsByName,
  getProductsById: getProductsById,
  getProductsByCategory: getProductsByCategory,
};

export default dataAccess;
