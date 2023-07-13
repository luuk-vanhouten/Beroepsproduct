import dataAccess from "../db/dataAccess.js";
let products = {};

function getAllProducts(response) {
  products = dataAccess.getAllProducts();
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json(products);
  }
}

function getProductsByName(request, response) {
  products = dataAccess.getProductsByName(request.params.product_name);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getProductsById(request, response) {
  products = dataAccess.getProductsById(request.params.product_id);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getProductsByCategory(request, response) {
  products = dataAccess.getProductsByCategory(request.params.category_name);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

const productController = {
  getAllProducts: getAllProducts,
  getProductsByName: getProductsByName,
  getProductsById: getProductsById,
  getProductsByCategory: getProductsByCategory,
};

export default productController;
