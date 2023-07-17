import Database from "better-sqlite3";

let db;

function Query(query) {
  return db.prepare(query);
}

function initializeDatabase() {
  db = new Database("./db/database.sqlite");
}

function registerNewCustomer(
  first_name,
  last_name,
  email,
  password,
  phone_number,
  address,
  city,
  state,
  zip_code,
  country
) {
  try {
    const query = Query(
      "INSERT INTO customer (first_name, last_name, email, password, phone_number, address, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    query.run(
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address,
      city,
      state,
      zip_code,
      country
    );
    return "Customer " + email + " toegevoegd";
  } catch (error) {
    console.error("An error occurred while executing the insert query:", error);
  }
}

function loginCustomer(email, password) {
  try {
    const query = Query(
      "SELECT * FROM customer WHERE email = ? AND password = ?"
    );
    const result = query.all(email, password);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function updateCustomer(
  customer_id,
  first_name,
  last_name,
  email,
  password,
  phone_number,
  address,
  city,
  state,
  zip_code,
  country
) {
  try {
    const query = Query(
      "UPDATE customer SET first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ? WHERE customer_id = ?"
    );
    query.run(
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address,
      city,
      state,
      zip_code,
      country,
      customer_id
    );
    return "Customer " + customer_id + " geupdate";
  } catch (error) {
    console.error("An error occurred while executing the update query:", error);
  }
}

function deleteCustomer(customer_id) {
  try {
    const query = Query("SELECT * FROM customer WHERE customer_id = ?");
    const check = query.all(customer_id);
    if (check && check.length == 0) {
      return "Customer " + customer_id + " bestaat niet";
    } else {
      const query = Query("DELETE FROM customer WHERE customer_id = ?");
      query.run(customer_id);
      return "Customer " + customer_id + " verwijderd";
    }
  } catch (error) {
    console.error("An error occurred while executing the delete query:", error);
  }
}

function getAllProducts() {
  try {
    const query = Query(
      "SELECT * FROM product INNER JOIN category ON category.category_id = product.category_id"
    );
    const result = query.all();
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsByName(name) {
  try {
    const query = Query("SELECT * FROM product WHERE name LIKE ?");
    const result = query.all(name);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsById(product_id) {
  try {
    const query = Query("SELECT * FROM product WHERE product_id = ?");
    const result = query.all(product_id);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function getProductsByCategory(category_name) {
  try {
    const query = Query(
      "SELECT * FROM product AS p INNER JOIN category AS c ON c.category_id = p.category_id WHERE c.category_name LIKE ?"
    );
    const result = query.all(category_name);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
}

function addProduct(name, description, price, category_id) {
  try {
    const query = Query(
      "INSERT INTO product (name, description, price, category_id) VALUES (?, ?, ?, ?)"
    );
    query.run(name, description, price, category_id);
    return "Product " + name + " toegevoegd";
  } catch (error) {
    console.error("An error occurred while executing the insert query:", error);
  }
}

function updateProduct(product_id, name, description, price, category_id) {
  try {
    const query = Query(
      "UPDATE product SET name = ?, description = ?, price = ?, category_id = ? WHERE product_id = ?"
    );
    query.run(name, description, price, category_id, product_id);
    return "Product " + product_id + " geupdate";
  } catch (error) {
    console.error("An error occurred while executing the update query:", error);
  }
}

function deleteProduct(product_id) {
  try {
    const query = Query("SELECT * FROM product WHERE product_id = ?");
    const check = query.all(product_id);
    if (check && check.length == 0) {
      return "Product " + product_id + " bestaat niet";
    } else {
      const query = Query("DELETE FROM product WHERE product_id = ?");
      query.run(product_id);
      return "Product " + product_id + " verwijderd";
    }
  } catch (error) {
    console.error("An error occurred while executing the delete query:", error);
  }
}

function addCategory(category_name) {
  try {
    const query = Query("INSERT INTO category (category_name) VALUES (?)");
    query.run(category_name);
    return "Category " + category_name + " toegevoegd";
  } catch (error) {
    console.error("An error occurred while executing the insert query:", error);
  }
}

function updateCategory(category_id, category_name) {
  try {
    const query = Query(
      "UPDATE category SET category_name = ? WHERE category_id = ?"
    );
    query.run(category_name, category_id);
    return "Category " + category_id + " geupdate";
  } catch (error) {
    console.error("An error occurred while executing the update query:", error);
  }
}

function deleteCategory(category_id) {
  try {
    const query = Query("SELECT * FROM category WHERE category_id = ?");
    const check = query.all(category_id);
    if (check && check.length == 0) {
      return "Category " + category_id + " bestaat niet";
    } else {
      const query = Query("DELETE FROM category WHERE category_id = ?");
      query.run(category_id);
      return "Category " + category_id + " verwijderd";
    }
  } catch (error) {
    console.error("An error occurred while executing the delete query:", error);
  }
}

const dataAccess = {
  initializeDatabase: initializeDatabase,
  db: null,
  registerNewCustomer: registerNewCustomer,
  loginCustomer: loginCustomer,
  updateCustomer: updateCustomer,
  deleteCustomer: deleteCustomer,
  getAllProducts: getAllProducts,
  getProductsByName: getProductsByName,
  getProductsById: getProductsById,
  getProductsByCategory: getProductsByCategory,
  addProduct: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  addCategory: addCategory,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory,
};

export default dataAccess;
