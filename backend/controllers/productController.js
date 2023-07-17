import dataAccess from "../db/dataAccess.js";

function getAllProducts(request, response) {
  const products = dataAccess.getAllProducts();
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json(products);
  }
}

function getProductsByName(request, response) {
  const products = dataAccess.getProductsByName(request.params.name);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getProductsById(request, response) {
  const products = dataAccess.getProductsById(request.params.id);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getProductsByCategory(request, response) {
  const products = dataAccess.getProductsByCategory(
    request.params.category_name
  );
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function addProduct(request, response) {
  const productAdd = dataAccess.addProduct(
    request.body.name,
    request.body.description,
    request.body.price,
    request.body.category_id
  );
  response.json(productAdd);
}

function updateProduct(request, response) {
  const productUpdate = dataAccess.updateProduct(
    request.body.product_id,
    request.body.name,
    request.body.description,
    request.body.price,
    request.body.category_id
  );
  response.json(productUpdate);
}

function deleteProduct(request, response) {
  const productDelete = dataAccess.deleteProduct(request.params.product_id);
  response.json(productDelete);
}

function addCategory(request, response) {
  const categoryAdd = dataAccess.addCategory(request.body.category_name);
  response.json(categoryAdd);
}

function updateCategory(request, response) {
  const categoryUpdate = dataAccess.updateCategory(
    request.body.category_id,
    request.body.category_name
  );
  response.json(categoryUpdate);
}

function deleteCategory(request, response) {
  const categoryDelete = dataAccess.deleteCategory(request.params.category_id);
  response.json(categoryDelete);
}

const productController = {
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

export default productController;
